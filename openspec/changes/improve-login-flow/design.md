# Design: Login Flow Refactoring

## Client-Side Redirection
We opt for client-side redirection handling (`redirect: false` in `signIn`) to maintain state and provide a smoother UX.
- **Trade-off**: Requires manual `router.push()`, but allows us to inspect the error object returned by NextAuth.

## Testing Strategy
- **Unit Tests**: Use `vitest` with `jsdom` environment.
- **Mocking**: We will mock `next-auth/react` (signIn) and `next/navigation` (useRouter, useSearchParams) to isolate component logic.
