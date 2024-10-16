import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { RoutePath } from './routes.enum'
import Error from 'components/Error/Error'
import Admin from 'components/Admin/Admin'
import Layout from 'components/Layout/Layout'
import { Competition } from 'pages/Competitions/Competition'
import { HorsePage } from 'pages/Horse/Horse'
import { Lessons } from 'pages/Lesson/Lessons'
import { SignUp } from 'pages/SignUp/SignUp'
import { SignIn } from 'pages/SignIn/SignIn' // Create a SignIn component if you don't have one
import ProtectedRoute from 'routes/ProtectedRoute'
import { HorseProvider } from 'context/horse.context'
import Home from 'pages/Home/Home'

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
            path: RoutePath.SIGNIN,
            element: <SignIn />
          },
          {
            path: RoutePath.SIGNUP,
            element: <SignUp />
          },
          {
            path: RoutePath.HOME,
            element: <Home />
          },
          {
            element: <ProtectedRoute />,
            children: [
              {
                path: RoutePath.CLASSES,
                element: (
                  <HorseProvider>
                    <Lessons />
                  </HorseProvider>
                )
              },
              {
                path: RoutePath.COMPETITION,
                element: (
                  <HorseProvider>
                    <Competition />
                  </HorseProvider>
                )
              },
              {
                path: RoutePath.ADMIN,
                element: <Admin />
              },
              {
                path: RoutePath.ADMIN_HORSES,
                element: <HorsePage />
              }
              // {
              //   path: RoutePath.ADMIN_INSTRUCTORS,
              //   element: <InstructorsView />
              // }
            ]
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
