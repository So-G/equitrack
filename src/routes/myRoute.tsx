import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { RoutePath } from './routes.enum'
import Error from 'components/Error/Error'
import Home from 'pages/Home/Home'
import Admin from 'components/Admin/Admin'
import Layout from 'components/Layout/Layout'
import { Competition } from 'pages/Competitions/Competition'
import { HorsePage } from 'pages/Horse/Horse'
import InstructorsView from 'pages/InstructorsView/InstructorsView'
import { Class } from 'pages/Class/Class'
import Home2 from 'pages/Home/Home2'

export const myRoutes = createBrowserRouter([
  {
    errorElement: <Navigate to={RoutePath.ERROR} replace={true} />,
    children: [
      {
        path: RoutePath.HOME,
        element: (
          <Layout>
            <Outlet />
          </Layout>
        ),
        children: [
          {
            index: true,
            element: <Home2 />
          },
          {
            path: RoutePath.CLASSES,
            element: <Class />
          },
          {
            path: RoutePath.COMPETITION,
            element: <Competition />
          },
          {
            path: RoutePath.ADMIN,
            element: <Admin />
          },
          {
            path: RoutePath.ADMIN_HORSES,
            element: <HorsePage />
          },
          {
            path: RoutePath.ADMIN_INSTRUCTORS,
            element: <InstructorsView />
          }
        ]
      }
    ]
  },
  {
    path: RoutePath.ERROR,
    element: <Error />
  }
])
