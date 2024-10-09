import { Timestamp } from 'firebase/firestore'

export const getShortDate = (dateString: string | Date): string | Date => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr')
}

export const convertTimestampToDate = (timestamp: Timestamp | undefined): string => {
  if (!timestamp) {
    return 'Unknown Date' // Or however you want to handle this case
  }

  // Convert the timestamp to a JavaScript Date object
  const date = timestamp.toDate() // toDate() gives us a JS Date object

  // Extract day, month, and year from the Date object
  const day = date.getDate().toString().padStart(2, '0') // Ensure day is 2 digits
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // Month is 0-indexed
  const year = date.getFullYear()

  // Format the date as DD/MM/YYYY
  return `${day}/${month}/${year}`
}
