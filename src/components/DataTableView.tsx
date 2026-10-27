import type { DataTable } from '../content/types'
import { renderInline } from './RichText'

export function DataTableView({ table }: { table: DataTable }) {
  return (
    <div className="table-wrap">
      <table>
        {table.caption ? <caption>{renderInline(table.caption)}</caption> : null}
        <thead>
          <tr>
            {table.headers.map((h, i) => (
              <th key={i}>{renderInline(h)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>{renderInline(c)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
