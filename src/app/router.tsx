import { Route, Routes } from 'react-router'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
