import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { Day } from 'enums/day.enum'
import { Discipline } from 'enums/discipline.enum'
import { getShortDate } from 'helpers/date.helper'
import { useState } from 'react'
import { Class } from 'types/class.type'

const defaultData: Class[] = [
  {
    horse: 'tanner',
    date: '2021-12-21',
    day: 'Lundi' as Day,
    instructor: 'B',
    discipline: 'Jumping' as Discipline,
    rating: 50
  },
  {
    horse: 'tandy',
    date: '21/12/2021',
    day: Day.MONDAY,
    instructor: 'C',
    discipline: Discipline.CROSS,
    rating: 80
  },
  {
    horse: 'joe',
    date: '2021-12-21',
    day: Day.MONDAY,
    instructor: 'A',
    discipline: 'Dressage' as Discipline,
    rating: 10
  }
]

const columnHelper = createColumnHelper<Class>()

const columns = [
  columnHelper.accessor('horse', {
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('date', {
    cell: (info) => getShortDate(info.getValue())
  }),
  columnHelper.accessor('day', {
    header: () => 'day',
    cell: (info) => info.renderValue()
  }),
  columnHelper.accessor('instructor', {
    header: () => <span>instructor</span>
  }),
  columnHelper.accessor('discipline', {
    header: 'Discipline'
  }),
  columnHelper.accessor('rating', {
    header: 'Rating'
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
