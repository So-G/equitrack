import { ClassTable } from 'components/Tables/ClassTable'
import styles from './class.module.scss'
import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import NewClassModal from 'components/Modal/NewClassModal'
import { useEffect, useState } from 'react'
import { Lesson } from 'types/lesson.type'
import { getClasses } from 'services/classes.service'

export const Class = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [lessons, setLessons] = useState<Lesson[]>([])

  const closeModal = () => setIsModalOpen(false)
  const lessonsMapper = (lessons: any[]): Lesson[] => {
    return lessons.map((lesson) => ({
      id: lesson.id,
      day: lesson.day,
      date: lesson.date,
      coach: lesson.coach,
      discipline: lesson.discipline,
      instructor: lesson.instructor,
      horse: lesson.horse,
      rating: lesson.rating
    }))
  }

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await getClasses()
        const mappedData = lessonsMapper(data)
        setLessons(mappedData)
      } catch (error) {
        console.error('Error fetching lessons:', error)
      }
    }

    fetchClasses()
  }, [])

  return (
    <div className={styles.classPage}>
      <div className={styles.content}>
        <Button
          bg="black"
          color="white"
          leftIcon={<AddIcon />}
          onClick={() => setIsModalOpen(true)}
        >
          Ajouter un cours
        </Button>
        <h1>2024-2025</h1>
        <ClassTable data={lessons} />
      </div>
      <NewClassModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
