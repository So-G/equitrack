import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { useState } from 'react'
import { Class } from 'types/class.interface'

const defaultData: Class[] = [
  {
    horse: 'tanner',
    date: 'linsley',
    day: 24,
    instructor: 100,
    discipline: 'In Relationship',
    rating: 50
  },
  {
    horse: 'tandy',
    date: 'miller',
    day: 40,
    instructor: 40,
    discipline: 'Single',
    rating: 80
  },
  {
    horse: 'joe',
    date: 'dirte',
    day: 45,
    instructor: 20,
    discipline: 'Complicated',
    rating: 10
  }
]

const columnHelper = createColumnHelper<Class>()

const columns = [
  columnHelper.accessor('horse', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id
  }),
  columnHelper.accessor((row) => row.date, {
    id: 'date',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id
  }),
  columnHelper.accessor('day', {
    header: () => 'day',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id
  }),
  columnHelper.accessor('instructor', {
    header: () => <span>instructor</span>,
    footer: (info) => info.column.id
  }),
  columnHelper.accessor('discipline', {
    header: 'Status',
    footer: (info) => info.column.id
  }),
  columnHelper.accessor('rating', {
    header: 'Profile Progress',
    footer: (info) => info.column.id
  })
]
export const Table24 = () => {
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
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
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
