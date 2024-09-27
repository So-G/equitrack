import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper
} from '@tanstack/react-table'
import styles from './table.module.scss'
import { Round } from 'types/round.type'

const columnHelper = createColumnHelper<Round>()

const columns = [
  columnHelper.accessor('location', {
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('date', {
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('category', {
    header: () => 'Epreuve',
    cell: (info) => info.renderValue()
  }),
  columnHelper.accessor('horse', {
    header: 'Cheval',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('ranking', {
    header: 'Classement'
  }),
  columnHelper.accessor('points', {
    header: 'Points championnat'
  })
]

export const CompetitionTable = ({ data }: { data: Round[] }) => {
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
