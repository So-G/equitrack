import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Tooltip
} from '@chakra-ui/react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { getShortDate } from 'helpers/date.helper'
import { Lesson } from 'types/lesson.type'
import styles from './table.module.scss'
import { format } from 'date-fns'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { deleteLesson } from 'services/lessons.service'
import { Dispatch, SetStateAction } from 'react'
import { HorseToy } from 'tabler-icons-react'

const columnHelper = createColumnHelper<Lesson>()

export const LessonTable = ({
  data,
  setData
}: {
  data: Lesson[]
  setData: Dispatch<SetStateAction<Lesson[]>>
}) => {
  const handleEdit = async (lesson: Lesson) => {
    console.log('Edit:', lesson)
  }

  const handleDelete = async (lesson: Lesson) => {
    console.log('Delete:', lesson)
    await deleteLesson(lesson)
    setData((prev) => prev.filter((item) => item.id !== lesson.id))
  }

  const columns = [
    columnHelper.accessor('horse', {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor('day', {
      header: () => 'day',
      cell: (info) => format(new Date(info.row.original.date), 'EEEE')
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
    }),
    columnHelper.display({
      header: 'Comment',
      cell: (info) => (
        <Tooltip label={'rr'} closeOnClick>
          <IconButton
            icon={<HorseToy />}
            aria-label={''}
            bg="transparent"
            onClick={() => console.log(info.row.original.comments)}
          />
        </Tooltip>
      )
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
