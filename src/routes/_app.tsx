import { createFileRoute, Outlet } from '@tanstack/react-router'
import Header from '../components/Header'

export const Route = createFileRoute('/_app')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
