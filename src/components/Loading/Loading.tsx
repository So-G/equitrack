import React, { FC } from 'react'
import Lottie from 'lottie-react'
import horseAnimationData from '../../assets/horse-animation.json'

const Loading: FC = () => {
  return (
    <div className="horse-lottie-animation">
      <Lottie animationData={horseAnimationData} loop={true} />
    </div>
  )
}

export default Loading
