import { useState } from 'react'

const AddHorseForm = () => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [age, setAge] = useState(0)
  const [color, setColor] = useState('')

  const handleAddHorse = () => {
    console.log('adding horse')
  }

  return (
    <div>
      <h1>Ajouter un cheval</h1>
      <form>
        <input
          type="text"
          placeholder="Nom du cheval"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="text" />
      </form>
    </div>
  )
}

export default AddHorseForm
