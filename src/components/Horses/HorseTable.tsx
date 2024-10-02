import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { useState } from 'react'
import { Horse } from 'types/horse.type'

const defaultData: Horse[] = [
  {
    name: 'tanner',
    color: 'brown',
    rating: 50
  },
  {
    name: 'tandy',
    color: 'black',
    rating: 80
  },
  {
    name: 'joe',
    color: 'white',
    rating: 10
  }
]

const columnHelper = createColumnHelper<Horse>()
const columns = [
  columnHelper.accessor('name', {
    header: 'Name'
  }),
  columnHelper.accessor('color', {
    header: 'Color'
  }),
  columnHelper.accessor('dob', {
    header: 'Age'
  }),
  columnHelper.accessor('rating', {
    header: 'Rating'
  })
]

export const HorseTable = () => {
  const [data, _setData] = useState(() => [...defaultData])
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
