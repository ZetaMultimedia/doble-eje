import { describe, expect, it } from 'vitest'
import { loginSchema } from './loginSchema'

describe('loginSchema', () => {
  it('rejects an invalid email', () => {
    const result = loginSchema.safeParse({
      email: 'correo-invalido',
      password: 'secreto',
    })

    expect(result.success).toBe(false)
  })

  it('requires a password', () => {
    const result = loginSchema.safeParse({
      email: 'cliente@empresa.com',
      password: '',
    })

    expect(result.success).toBe(false)
  })

  it('accepts valid credentials', () => {
    const credentials = {
      email: 'cliente@empresa.com',
      password: 'secreto',
    }

    expect(loginSchema.parse(credentials)).toEqual(credentials)
  })
})
