import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './myRoute'

const AppRoutes: FC = () => {
  return <RouterProvider router={myRoutes} />
}

export default AppRoutes
