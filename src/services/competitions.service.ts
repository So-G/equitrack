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
    // Ajoute un nouveau document dans la collection "rounds" avec un ID généré automatiquement
    const docRef = await addDoc(collection(db, 'rounds'), {
      ...round,
      date: round.date // Firestore accepte les objets `Date` et les convertit en timestamp
    })

    console.log('Round added successfully with ID:', docRef.id) // Log l'ID généré
    return docRef.id // Retourne l'ID généré du document ajouté
  } catch (error) {
    console.error('Error adding round:', error) // Gère les erreurs
    throw error // Propage l'erreur si nécessaire
  }
}
