import { FC } from 'react'
import Lottie from 'lottie-react'
import horseAnimationData from '../../assets/horse-animation.json'
import styles from './home.module.scss'

const Home: FC = () => {
  return (
    <div className={styles.homePage}>
      <div className="horse-lottie-animation">
        <Lottie animationData={horseAnimationData} loop={true} className={styles.anim} />
      </div>
    </div>
  )
}

export default Home
