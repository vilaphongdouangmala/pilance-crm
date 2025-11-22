import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Auth-specific layout - no header, centered content, etc. */}
      <Outlet />
    </div>
  )
}
