import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { Round } from 'types/round.type'

export async function getCompetitions() {
  try {
    const querySnapshot = await getDocs(collection(db, 'round'))
    const competitions = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return competitions
  } catch (error) {
    console.error('Error fetching competitions:', error)
    throw error
  }
}

export async function addRound(round: Round) {
  try {
    const docRef = await addDoc(collection(db, 'round'), {
      ...round,
      date: round.date,
      season: '2024-2025'
    })

    console.log('🎉 Round added successfully with ID: ', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('👻 Error adding round:', error)
    throw error
  }
}
