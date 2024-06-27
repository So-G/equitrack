import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { RoutePath } from './routes.enum'
import Dummy from 'components/Dummy/Dummy'
import Error from 'components/Error/Error'
import Home from 'pages/Home/Home'
import Admin from 'components/Admin/Admin'
import Layout from 'components/Layout/Layout'
import { YearlyTable } from 'pages/YearlyTable/YearlyTable'
import Competition from 'pages/Competitions/Competition'
import HorseList from 'components/Horses/HorseList'
import { HorseView } from 'pages/HorseView/HorseView'

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
        path: RoutePath.ADMIN,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Admin />
          },
          {
            children: [
              {
                path: RoutePath.ADMIN_HORSES,
                element: <HorseView />
              }
            ]
          }
        ]
      },
      {
        path: RoutePath.TABLE,
        element: <YearlyTable />
      },

      {
        path: RoutePath.COMPETITION,
        element: <Competition />
      }
    ]
  },
  {
    path: RoutePath.ERROR,
    element: <Error />
  }
])
