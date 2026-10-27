import { Fragment, type ReactNode } from 'react'

/**
 * Renders the tiny markup subset used by course content:
 *   **bold**  __underline__  *italic*  `code`  and "\n" line breaks.
 */
export function RichText({ text, as: Tag = 'span', className }: { text: string; as?: 'span' | 'p' | 'div'; className?: string }) {
  return <Tag className={className}>{renderInline(text)}</Tag>
}

const TOKEN = /(\*\*[^*]+\*\*|__[^_]+__|\*[^*\n]+\*|`[^`]+`|\n)/g

export function renderInline(text: string): ReactNode[] {
  const parts = text.split(TOKEN)
  return parts.map((part, i) => {
    if (!part) return null
    if (part === '\n') return <br key={i} />
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('__') && part.endsWith('__')) return <u key={i}>{part.slice(2, -2)}</u>
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>
    return <Fragment key={i}>{part}</Fragment>
  })
}

/** Splits on blank lines into paragraphs. */
export function Paragraphs({ text, className }: { text: string; className?: string }) {
  return (
    <div className={className}>
      {text
        .split(/\n\s*\n/)
        .filter((p) => p.trim().length > 0)
        .map((p, i) => (
          <p key={i}>{renderInline(p.trim())}</p>
        ))}
    </div>
  )
}
