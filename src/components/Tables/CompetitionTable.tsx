import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, IconButton } from '@chakra-ui/react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper
} from '@tanstack/react-table'
import styles from './table.module.scss'
import { Round } from 'types/round.type'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { deleteRound } from 'services/competitions.service'
import { Dispatch, SetStateAction } from 'react'
import { getShortDate } from 'helpers/date.helper'

const columnHelper = createColumnHelper<Round>()

export const CompetitionTable = ({
  data,
  setData
}: {
  data: Round[]
  setData: Dispatch<SetStateAction<Round[]>>
}) => {
  const handleEdit = async (round: Round) => {
    console.log('Edit:', round)
  }

  const handleDelete = async (round: Round) => {
    console.log('Delete:', round)
    await deleteRound(round)
    setData((prev) => prev.filter((item) => item.id !== round.id))
  }

  const columns = [
    columnHelper.accessor('location', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('date', {
      cell: (info) => getShortDate(info.getValue())
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
      header: 'Classement',
      cell: (info) => <p>{`${info.getValue()} / ${info.row.original.participants}`}</p>
    }),
    columnHelper.accessor('points', {
      header: 'Points championnat'
    }),
    columnHelper.accessor('quarter', {
      header: 'Quart'
    }),

    columnHelper.display({
      header: 'Actions',
      cell: (info) => (
        <div>
          <IconButton
            aria-label="Edit"
            color="#5f7470"
            bg="transparent"
            marginBlock="0"
            icon={<EditIcon />}
            onClick={() => handleEdit(info.row.original)}
          />

          <IconButton
            aria-label="Delete"
            icon={<DeleteIcon />}
            color="#5f7470"
            bg="transparent"
            marginBlock="0"
            onClick={() => handleDelete(info.row.original)}
          />
        </div>
      )
    })
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className={styles.tablePage}>
      <TableContainer className={styles.table}>
        <Table variant="striped" colorScheme="pink">
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
