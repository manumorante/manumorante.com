import MainLayout from '@/layouts/MainLayout'
import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'))
const CvPage = lazy(() => import('@/pages/CvPage/CvPage'))

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'cv', Component: CvPage },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
