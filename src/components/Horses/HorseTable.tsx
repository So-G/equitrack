import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { Timestamp } from 'firebase/firestore'
import { getShortDate } from 'helpers/date.helper'
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
    header: 'Date de Naissance',
    cell: (info) => getShortDate(info.getValue().toDate()) // Utilisez getShortDate ici
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

  const bday = data.map((horse) => {
    const dob = horse.dob
    const date = dob.toDate() // Convert Timestamp to Date
    return getShortDate(date) // Format the date as desired
  })

  console.log('bday 🏇🏻', bday)

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
