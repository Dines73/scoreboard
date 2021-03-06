import React, { useMemo } from "react"
import { useTable, useSortBy } from "react-table"
import Data from "./db.json"
import { COLUMNS } from "./columns"
import "./table.css"

export const SortingTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => Data, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data }, useSortBy)

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td key={cell.id} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        {footerGroups.map(footerGroup => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map(column => (
              <td key={column.id} {...column.getFooterProps}>
                {column.render("Footer")}
              </td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  )
}
