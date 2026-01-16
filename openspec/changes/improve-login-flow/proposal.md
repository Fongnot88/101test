# Proposal: Improve Login Flow and Test Coverage

## Problem
The current `LoginForm` implementation uses `redirect: true` during `signIn`. This delegates the redirection logic entirely to NextAuth, which makes it difficult to provide immediate, inline feedback to the user in case of authentication failures (e.g., incorrect password). The application also lacks a testing framework to verify authentication logic.

## Solution
1.  **Refactor `LoginForm`**: Switch `signIn` to use `redirect: false`.
2.  **Error Handling**: Manually check the `signIn` response. If successful, redirect the user via `useRouter`. If failed, display an error message within the form.
3.  **Testing Infrastructure**: Install `vitest` and `@testing-library/react` to enable unit testing of components.
4.  **Add Tests**: Create unit tests for the `LoginForm` to verify validation and submission handling.

## Impact
- **User Experience**: Users will see clear error messages without a full page reload/redirect loop on failure.
- **Quality Assurance**: Added tests ensure the login form behaves as expected and prevent regressions.
