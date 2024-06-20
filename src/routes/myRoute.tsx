import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { RoutePath } from './routes.enum'
import Dummy from 'components/Dummy/Dummy'
import Error from 'components/Error/Error'
import Home from 'components/Home/Home'
import Admin from 'components/Admin/Admin'
import Layout from 'components/Layout/Layout'

export const myRoutes = createBrowserRouter([
  {
    path: RoutePath.HOME,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: <Navigate to={RoutePath.ERROR} replace={true} />,
    children: [
      { index: true, element: <Home /> },
      {
        path: RoutePath.DUMMY,
        element: <Dummy />
      },
      {
        path: RoutePath.ADMIN,
        element: <Admin />
      }
    ]
  },
  {
    path: RoutePath.ERROR,
    element: <Error />
  }
])
