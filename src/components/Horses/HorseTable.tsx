import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { convertTimestampToDate } from 'helpers/date.helper'
import { Horse } from 'types/horse.type'

const columnHelper = createColumnHelper<Horse>()
const columns = [
  columnHelper.accessor('name', {
    header: 'Nom'
  }),
  columnHelper.accessor('color', {
    header: 'Couleur'
  }),
  columnHelper.accessor('dob', {
    header: 'Date de naissance',
    cell: (info) => convertTimestampToDate(info.getValue())
  }),

  columnHelper.accessor('rating', {
    header: 'Rating'
  })
]

export const HorseTable = ({ data }: { data: Horse[] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div>
      <TableContainer>
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
