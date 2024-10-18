import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { getShortDate } from 'helpers/date.helper'
import { Dispatch, SetStateAction } from 'react'
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
    cell: (info) => getShortDate(info.getValue() ?? '01/01/2000')
  }),

  columnHelper.accessor('rating', {
    header: 'Rating'
  })
]

export const HorseTable = ({
  data,
  setData
}: {
  data: Horse[]
  setData: Dispatch<SetStateAction<Horse[]>>
}) => {
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
