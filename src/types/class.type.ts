import { Discipline } from 'enums/discipline.enum'
import { Day } from 'enums/day.enum'

export type Class = {
  horse: string
  date: string
  day: Day
  instructor: string
  discipline: Discipline
  rating: number
  showMore?: string
}
