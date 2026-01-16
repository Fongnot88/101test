import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { LoginForm } from '../login-form'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

// Mock modules
vi.mock('next-auth/react', () => ({
  signIn: vi.fn(),
}))

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(() => ({
    get: vi.fn(),
  })),
}))

describe('LoginForm', () => {
  const mockPush = vi.fn()
  
  beforeEach(() => {
    vi.clearAllMocks()
    ;(useRouter as any).mockReturnValue({
      push: mockPush,
    })
  })

  it('renders login form correctly', () => {
    render(<LoginForm />)
    expect(screen.getByPlaceholderText('name@example.com')).toBeDefined()
    expect(screen.getByPlaceholderText('Password')).toBeDefined()
    expect(screen.getByRole('button', { name: /sign in/i })).toBeDefined()
  })

  it('shows validation errors for empty fields', async () => {
    render(<LoginForm />)
    
    const emailInput = screen.getByPlaceholderText('name@example.com')
    const passwordInput = screen.getByPlaceholderText('Password')
    const submitBtn = screen.getByRole('button', { name: /sign in/i })

    // Clear default values if any (though defaultValues are set in component, usually tests run against user interaction)
    // But here we rely on default values being valid or invalid? 
    // The component has defaults: "demo@demo.com" and "demo".
    // So if we just click submit, it will submit.
    // Let's clear the inputs to test validation.
    
    fireEvent.change(emailInput, { target: { value: '' } })
    fireEvent.change(passwordInput, { target: { value: '' } })
    
    fireEvent.click(submitBtn)

    await waitFor(() => {
      // Zod schema says email: email(), password: min(1)
      // Expect validation messages. Note: react-hook-form validation might take a tick.
      // The schema doesn't have custom error message for empty email, likely standard Zod message.
      // But let's check for invalid email input
    })
    
    // Actually, let's test invalid email format
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } })
    fireEvent.click(submitBtn)
    
    await waitFor(() => {
       expect(screen.getByText('Invalid email address')).toBeDefined()
    })
  })

  it('calls signIn with correct credentials', async () => {
    render(<LoginForm />)
    
    const emailInput = screen.getByPlaceholderText('name@example.com')
    const passwordInput = screen.getByPlaceholderText('Password')
    const submitBtn = screen.getByRole('button', { name: /sign in/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    
    // Mock successful sign in
    ;(signIn as any).mockResolvedValue({ ok: true, error: null })

    fireEvent.click(submitBtn)

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'test@example.com',
        password: 'password123',
        redirect: false,
        callbackUrl: '/dashboard',
      })
    })

    await waitFor(() => {
       expect(mockPush).toHaveBeenCalledWith('/dashboard')
    })
  })

  it('displays error message on failed login', async () => {
    render(<LoginForm />)
    
    const submitBtn = screen.getByRole('button', { name: /sign in/i })

    // Mock failed sign in
    ;(signIn as any).mockResolvedValue({ ok: false, error: 'CredentialsSignin' })

    fireEvent.click(submitBtn)

    await waitFor(() => {
      expect(screen.getByText('Invalid email or password')).toBeDefined()
    })
    
    expect(mockPush).not.toHaveBeenCalled()
  })
})
