import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react'
import { getHorses } from 'services/horses.service'
import { Horse } from 'types/horse.type'

interface HorseContextType {
  horses: Horse[]
}

interface HorseProviderProps {
  readonly children: ReactNode
}
const horseContext = createContext<HorseContextType | undefined>(undefined)

export function HorseProvider({ children }: HorseProviderProps): JSX.Element {
  const [horses, setHorses] = useState<Horse[]>([])

  useEffect(() => {
    const fetchHorses = async () => {
      try {
        const horsesData = await getHorses()
        const mappedHorses: Horse[] = horsesData.map((horse: any) => ({
          id: horse.id,
          name: horse.name,
          color: horse.color,
          dob: horse.dob,
          breed: horse.breed,
          rating: horse.rating
        }))
        setHorses(mappedHorses)
      } catch (error) {
        console.error('🐴 Erreur lors de la récupération des chevaux :', error)
      }
    }

    fetchHorses()
  }, [])

  return <horseContext.Provider value={{ horses }}>{children}</horseContext.Provider>
}

export function useHorses(): HorseContextType {
  const context = useContext(horseContext)
  console.log('Went through 🐴 context:', context)
  if (!context) {
    throw new Error('useHorses must be used within a HorseProvider')
  }
  return context
}
