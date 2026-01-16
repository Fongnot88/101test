## MODIFIED Requirements

### Requirement: Inline Error Feedback
The system MUST display an error message directly on the login form when authentication fails, instead of redirecting to a generic error page.

#### Scenario: Invalid Credentials
- **Given** the user is on the login page
- **When** the user enters an unregistered email or incorrect password
- **And** clicks "Sign In"
- **Then** the system stays on the login page
- **And** an error message "Invalid email or password" is displayed near the form controls.

### Requirement: Successful Redirection
The system MUST redirect the user to the dashboard upon successful authentication.

#### Scenario: Valid Credentials
- **Given** the user is on the login page
- **When** the user enters valid credentials
- **And** clicks "Sign In"
- **Then** the user is redirected to `/dashboard`.
