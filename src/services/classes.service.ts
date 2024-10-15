import { collection, addDoc, query, getDocs, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import { Lesson } from 'types/lesson.type'

export async function getClasses() {
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
