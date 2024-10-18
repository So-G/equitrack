import { collection, addDoc, query, getDocs, orderBy, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { Lesson } from 'types/lesson.type'

export async function getLessons() {
  try {
    const classesQuery = query(collection(db, 'class'), orderBy('date', 'asc'))

    const querySnapshot = await getDocs(classesQuery)
    const classes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    console.log('🎉 Success')
    return classes
  } catch (error) {
    console.error('Error fetching classes:', error)
    throw error
  }
}

export async function addLesson(lesson: Lesson) {
  try {
    const docRef = await addDoc(collection(db, 'class'), {
      ...lesson
    })

    console.log('🎉 Class added successfully with ID: ', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('👻 Error adding class:', error)
    throw error
  }
}

export async function deleteLesson(lesson: Lesson) {
  if (!lesson.id) {
    console.error("L'ID de la classe est manquant. Impossible de la supprimer.")
    return
  }
  try {
    await deleteDoc(doc(db, 'class', lesson.id))
    console.log('🎉 Class deleted successfully')
  } catch (error) {
    console.error('👻 Error deleting class:', error)
    throw error
  }
}
