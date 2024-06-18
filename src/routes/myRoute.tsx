import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { RoutePath } from './routes.enum'
import Dummy from 'components/Dummy/Dummy'
import Error from 'components/Error/Error'
import Home from 'components/Home/Home'

export const myRoutes = createBrowserRouter([
  {
    path: RoutePath.HOME,
    element: <Outlet />,
    errorElement: <Navigate to={RoutePath.ERROR} replace={true} />,
    children: [
      { index: true, element: <Home /> },
      {
        path: RoutePath.DUMMY,
        element: <Dummy />
      },
      {
        path: RoutePath.ADMIN,
        element: <Dummy />
      }
    ]
  },
  {
    path: RoutePath.ERROR,
    element: <Error />
  }
])
