import { Timestamp } from 'firebase/firestore'

export type Horse = {
  id?: string
  name: string
  color: string
  dob?: Timestamp
  rating?: number
  breed?: string
}
