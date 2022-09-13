import React, { useCallback, useMemo } from "react"
import { useTable, useBlockLayout } from "react-table"
import { FixedSizeList } from "react-window"
import styled from "styled-components"
import BoxHeader from "./BoxHeader"
import { useTranslation } from "react-i18next"

const Styles = styled.div`
  width: 100%;

  .table {
    display: inline-block;
    border-spacing: 0;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th {
      color: white;
      background: #0074b5;
      border-right: 1px solid lightgray;
    }

    .th:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    .th:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      input {
        text-align: end;
      }
    }
  }
`

function TableCustom({ data, updateItem, deleteItem, columnList, width, height, scheme, schemeIndividual }) {
  const { t } = useTranslation()
  const columns = useMemo(
    () =>
      columnList.map(item => {
        const { Header, accessor, width, Cell } = item
        return {
          Header,
          accessor,
          width,
          Cell,
        }
      }),
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      updateItem,
      deleteItem,
      scheme,
      schemeIndividual,
    },
    useBlockLayout
  )

  const RenderRow = useCallback(
    ({ index, style }) => {
      const row = rows[index]
      prepareRow(row)
      return (
        <div
          {...row.getRowProps({
            style,
          })}
          className="tr"
        >
          {row.cells.map(cell => {
            return (
              <div {...cell.getCellProps()} className="td">
                {cell.render("Cell")}
              </div>
            )
          })}
        </div>
      )
    },
    [prepareRow, rows]
  )

  return (
    <Styles>
      <div {...getTableProps()} className="table">
        <div>
          {headerGroups.map(headerGroup => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map(column => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render("Header")}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div {...getTableBodyProps()}>
          <FixedSizeList height={height} itemCount={rows.length} itemSize={35} width={width}>
            {RenderRow}
          </FixedSizeList>
        </div>
      </div>
    </Styles>
  )
}

export default TableCustom
