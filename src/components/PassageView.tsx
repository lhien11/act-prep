import { Fragment, type ReactNode } from 'react'
import type { Passage } from '../content/types'
import { renderInline } from './RichText'
import { DataTableView } from './DataTableView'

const UNDERLINE = /\[\[(\d+):([^\]]+)\]\]/g

function renderEnglishParagraph(p: string, current?: number): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  UNDERLINE.lastIndex = 0
  while ((m = UNDERLINE.exec(p)) !== null) {
    if (m.index > last) out.push(<Fragment key={`t${last}`}>{renderInline(p.slice(last, m.index))}</Fragment>)
    const n = Number(m[1])
    out.push(
      <span key={`u${n}`} className={`ul${current === n ? ' current' : ''}`} id={`ul-${n}`}>
        <sup>{n}</sup>
        {m[2]}
      </span>,
    )
    last = m.index + m[0].length
  }
  if (last < p.length) out.push(<Fragment key={`t${last}`}>{renderInline(p.slice(last))}</Fragment>)
  return out
}

export function PassageView({ passage, currentUnderline }: { passage: Passage; currentUnderline?: number }) {
  const paragraphs = passage.text.split(/\n\s*\n/).filter((p) => p.trim().length > 0)
  const isEnglish = passage.kind === 'english-passage'
  return (
    <div className="passage">
      <div className="eyebrow">{kindLabel(passage.kind)}</div>
      <h3>{passage.title}</h3>
      {passage.intro ? <p className="muted small"><em>{renderInline(passage.intro)}</em></p> : null}
      {paragraphs.map((p, i) => (
        <p key={i}>{isEnglish ? renderEnglishParagraph(p.trim(), currentUnderline) : renderInline(p.trim())}</p>
      ))}
      {passage.tables?.map((t, i) => (
        <DataTableView key={i} table={t} />
      ))}
    </div>
  )
}

export function kindLabel(kind: Passage['kind']): string {
  switch (kind) {
    case 'english-passage':
      return 'English passage'
    case 'prose-fiction':
      return 'Literary narrative'
    case 'social-science':
      return 'Social science'
    case 'humanities':
      return 'Humanities'
    case 'natural-science':
      return 'Natural science'
    case 'data-representation':
      return 'Data representation'
    case 'research-summary':
      return 'Research summaries'
    case 'conflicting-viewpoints':
      return 'Conflicting viewpoints'
  }
}
