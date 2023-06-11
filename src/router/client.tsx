import HomePage from '@/apps/client/HomePage'
import AppLayout from '@/apps/client/AppLayout'
import { RouteObject } from 'react-router-dom'

export const clientRouter: Array<RouteObject> = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]
