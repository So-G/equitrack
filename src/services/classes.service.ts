import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { Lesson } from 'types/lesson.type'

export async function getClasses() {
  try {
    const querySnapshot = await getDocs(collection(db, 'class'))
    const classes = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return classes
  } catch (error) {
    console.error('Error fetching classes:', error)
    throw error
  }
}

export async function addClass(lesson: Lesson) {
  try {
    const docRef = await addDoc(collection(db, 'class'), {
      ...lesson,
      day: 'Lundi'
    })

    console.log('🎉 Class added successfully with ID: ', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('👻 Error adding class:', error)
    throw error
  }
}
