import styles from './lesson.module.scss'
import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { Lesson } from 'types/lesson.type'
import { getLessons } from 'services/lessons.service'
import NewLessonModal from 'components/Modal/NewLessonModal'
import { LessonTable } from 'components/Tables/LessonTable'

export const Lessons = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [lessons, setLessons] = useState<Lesson[]>([])

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
        const data = await getLessons()
        const mappedData = lessonsMapper(data)
        setLessons(mappedData)
      } catch (error) {
        console.error('Error fetching lessons:', error)
      }
    }
    fetchClasses()
  }, [])

  const closeModal = () => setIsModalOpen(false)

  return (
    <div className={styles.lessonPage}>
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
        <LessonTable data={lessons} setData={setLessons} />
      </div>
      <NewLessonModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
