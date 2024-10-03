import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { getShortDate } from 'helpers/date.helper'
import { Lesson } from 'types/lesson.type'
import styles from './table.module.scss'

const columnHelper = createColumnHelper<Lesson>()

const columns = [
  columnHelper.accessor('horse', {
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('day', {
    header: () => 'day',
    cell: (info) => info.renderValue()
  }),
  columnHelper.accessor('date', {
    cell: (info) => getShortDate(info.getValue())
  }),
  columnHelper.accessor('coach', {
    cell: (info) => info.renderValue()
  }),
  columnHelper.accessor('discipline', {
    header: 'Discipline',
    cell: (info) => info.renderValue()
  }),
  columnHelper.accessor('rating', {
    header: 'Rating',
    cell: (info) => info.renderValue()
  })
]
export const ClassTable = ({ data }: { data: Lesson[] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className={styles.tablePage}>
      <TableContainer className={styles.table}>
        <Table>
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}
