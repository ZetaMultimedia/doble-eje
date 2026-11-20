import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(1, 'Ingresá tu correo electrónico').email('Ingresá un correo válido'),
  password: z.string().min(1, 'Ingresá tu contraseña'),
})

export type LoginCredentials = z.infer<typeof loginSchema>
