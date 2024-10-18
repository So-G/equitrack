import { collection, getDocs, addDoc, deleteDoc, doc, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { Round } from 'types/round.type'

export async function getCompetitions() {
  try {
    const competitionsQuery = query(collection(db, 'round'), orderBy('date', 'asc'))
    const querySnapshot = await getDocs(competitionsQuery)
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

export async function deleteRound(round: Round) {
  if (!round.id) {
    console.error("L'ID du round est manquant. Impossible de le supprimer.")
    return
  }

  try {
    await deleteDoc(doc(db, 'round', round.id))
    console.log('🎉 Round deleted successfully')
  } catch (error) {
    console.error('👻 Error deleting round:', error)
    throw error
  }
}

export async function updateRound(round: Round) {
  try {
    await addDoc(collection(db, 'round'), {
      ...round
    })

    console.log('Round updated successfully with ID: ', round.id)
  } catch (error) {
    console.error('👻 Error updating round:', error)
    throw error
  }
}
