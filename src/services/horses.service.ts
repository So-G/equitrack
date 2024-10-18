import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { Horse } from 'types/horse.type'

export async function getHorses() {
  try {
    const querySnapshot = await getDocs(collection(db, 'horse'))
    const horses = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return horses
  } catch (error) {
    console.error('Error fetching horses:', error)
    throw error
  }
}

export async function addHorse(horse: Horse) {
  try {
    const docRef = await addDoc(collection(db, 'horse'), {
      ...horse
    })

    console.log('🏇🏻 Horse added successfully with ID: ', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('👻 Error adding horse:', error)
    throw error
  }
}

export async function updateHorse(horse: Horse) {
  try {
    await console.log('🏇🏻 Horse updated successfully with ID: ', horse.id)
  } catch (error) {
    console.error('👻 Error updating horse:', error)
    throw error
  }
}
