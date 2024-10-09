import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styles from './signin.module.scss'
import { Button, Input } from '@chakra-ui/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

export const SignIn = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data: any) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
      navigate('/')
      console.log('✨ Utilisateur connecté:', userCredential)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <div className={styles.signinPage}>
      <h1>Connexion</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('email')} placeholder="Identifiant" id={styles.email} />
        <Input {...register('password')} placeholder="Mot de passe" type="password" id="password" />
        <Button bg="#F5E5D1" type="submit">
          Connexion
        </Button>
      </form>
    </div>
  )
}
