import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { RoutePath } from './routes.enum'
import Error from 'components/Error/Error'
import Home from 'pages/Home/Home'
import Admin from 'components/Admin/Admin'
import Layout from 'components/Layout/Layout'
import { YearlyTable } from 'pages/YearlyTable/YearlyTable'
import Competition from 'pages/Competitions/Competition'
import HorseView from 'pages/HorseView/HorseView'
import NewHorse from 'pages/NewHorse/NewHorse'
import InstructorsView from 'pages/InstructorsView/InstructorsView'

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
            element: <Home />
          },
          {
            path: RoutePath.CLASSES,
            element: <YearlyTable />
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
            element: <HorseView />
          },
          {
            path: RoutePath.ADMIN_NEW_HORSE,
            element: <NewHorse />
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
