import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import styles from './signup.module.scss'
import { Button, Input } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { auth } from '../../firebase'

interface FormValues {
  email: string
  password: string
}

export const SignUp = () => {
  const { register, handleSubmit } = useForm<FormValues>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSignUp: SubmitHandler<FormValues> = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
    } catch (error: any) {
      setError(error.message)
      console.error('Erreur lors de la création de l’utilisateur:', error)
    }
  }

  return (
    <div className={styles.signupPage}>
      <h1>Inscription</h1>
      <form className={styles.form} onSubmit={handleSubmit(handleSignUp)}>
        <Input
          type="email"
          {...register('email', { required: 'Email is required' })}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          {...register('password', { required: 'Password is required' })}
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">S'inscrire</Button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
