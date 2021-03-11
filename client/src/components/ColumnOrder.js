import React, { useMemo } from "react"
import { useTable, useColumnOrder } from "react-table"
import Data from "./db.json"
import { COLUMNS } from "./columns"
import "./table.css"

export const ColumnOrder = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => Data, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    setColumnOrder
  } = useTable(
    {
      columns,
      data
    },
    useColumnOrder
  )

  const changeOrder = () => {
    setColumnOrder(["id", "game", "name", "datum1", "soll_1", "ist_1"])
  }

  return (
    <>
      <button onClick={changeOrder}>Change column order</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th key={column.id} {...column.getHeaderProps()}>
                  {column.render("Header")}
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
    </>
  )
}
