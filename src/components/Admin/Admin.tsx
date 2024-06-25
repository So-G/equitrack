import { Select } from '@chakra-ui/react'
import React, { FC } from 'react'

const Admin: FC = () => {
  return (
    <div>
      <h1>Hello Admin</h1>
      <p>Bienvenue dans cet espace vous permettant de gérer vos chevaux, instructeurs, etc...</p>
      <Select placeholder="Choisir un cheval">
        <option value="cheval1">Cheval 1</option>
        <option value="cheval2">Cheval 2</option>
        <option value="cheval3">Cheval 3</option>
      </Select>
    </div>
  )
}

export default Admin
