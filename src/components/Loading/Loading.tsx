import React, { HTMLAttributes } from 'react'
import styles from './loading.module.scss'
import classNames from 'classnames'

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean
}

const Loading = ({ className }: LoadingProps) => {
  return (
    <div className={classNames(className, styles.container)}>
      <h1>Chargement...</h1>
    </div>
  )
}

export default Loading
