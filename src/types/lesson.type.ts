import { Discipline } from 'enums/discipline.enum'
import { Day } from 'enums/day.enum'

export type Lesson = {
  id?: string
  horse: string
  date: string
  day: Day
  coach: string
  discipline: Discipline
  rating: number
  showMore?: string
}
