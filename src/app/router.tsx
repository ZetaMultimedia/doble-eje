import { Route, Routes } from 'react-router'
import { CatalogPage } from '../pages/CatalogPage'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
