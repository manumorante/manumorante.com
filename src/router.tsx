import { ReactLenis } from 'lenis/react'
import { lazy } from 'react'
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router'

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'))
const CvPage = lazy(() => import('@/pages/CvPage/CvPage'))
const ProjectPage = lazy(() => import('@/pages/ProjectPage/ProjectPage'))

function Root() {
  return (
    <>
      <ReactLenis root options={{ autoRaf: true, anchors: true, stopInertiaOnNavigate: true }} />
      <ScrollRestoration />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'es', Component: HomePage },
      { path: 'cv', Component: CvPage },
      { path: 'projects/:id', Component: ProjectPage },
      { path: 'es/projects/:id', Component: ProjectPage },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
