import type { LessonBlock } from '../content/types'
import { renderInline } from './RichText'
import { DataTableView } from './DataTableView'

export function LessonBlocks({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="lesson">
      {blocks.map((b, i) => (
        <Block key={i} block={b} index={i} />
      ))}
    </div>
  )
}

function Block({ block, index }: { block: LessonBlock; index: number }) {
  switch (block.type) {
    case 'h':
      return <h2 id={`b-${index}`}>{renderInline(block.text)}</h2>
    case 'p':
      return <p>{renderInline(block.text)}</p>
    case 'list':
      return (
        <ul>
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ul>
      )
    case 'steps':
      return (
        <ol>
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ol>
      )
    case 'tip':
      return (
        <div className="callout">
          <div className="callout-label">Tip</div>
          <div>{renderInline(block.text)}</div>
        </div>
      )
    case 'warning':
      return (
        <div className="callout callout-warning">
          <div className="callout-label">Watch out</div>
          <div>{renderInline(block.text)}</div>
        </div>
      )
    case 'example':
      return (
        <div className="example">
          <div className="example-prompt">
            <div className="callout-label">Try it</div>
            <div>{renderInline(block.prompt)}</div>
          </div>
          <details>
            <summary>Show solution</summary>
            <div className="example-solution">{renderInline(block.solution)}</div>
          </details>
        </div>
      )
    case 'table':
      return <DataTableView table={{ caption: '', headers: block.headers, rows: block.rows }} />
  }
}
