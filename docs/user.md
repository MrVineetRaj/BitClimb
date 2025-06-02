# User Authentication Routes Documentation

## Overview

User authentication routes handle user registration, login, password management, and profile operations. These routes form the foundation of user management in the CodeDrill platform.

## Base URL

```
/api/auth
```

## Public Routes (No Authentication Required)

### User Registration

#### POST /api/auth/register

Register a new user account.

**Request Body:**

```json
{
  "name": "john_doe",
  "email": "john@example.com",
  "password": "SecurePassword123!",
  "role": "USER"
}
```

**Validation Rules:**

- Name: 3-30 characters, required
- Email: Valid email format, required
- Password: Minimum 6 characters, required
- Role: Optional, defaults to "USER"

**Response (Success):**

```json
{
  "status": 201,
  "success": true,
  "message": "Verification Mail Sent",
  "data": {
    "user": {
      "id": "user_id_here",
      "name": "john_doe",
      "email": "john@example.com",
      "role": "USER",
      "isEmailVerified": false,
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  }
}
```

**Note:** A JWT token is automatically set as an HTTP-only cookie upon successful registration.

### User Login

#### POST /api/auth/login

Authenticate user and get access token.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "SecurePassword123!"
}
```

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Logged in successfully",
  "data": {
    "id": "user_id_here",
    "name": "john_doe",
    "email": "john@example.com",
    "role": "USER",
    "isEmailVerified": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Note:** JWT token is set as an HTTP-only cookie with 7-day expiration.

### Email Verification

#### GET /api/auth/verify-email/:token

Verify email address using verification token from email.

**URL Parameters:**

- `token`: Email verification token from the verification email

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Account Verified",
  "data": {}
}
```

#### POST /api/auth/resend-verification-email

Resend email verification email.

**Request Body:**

```json
{
  "email": "john@example.com"
}
```

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Verification mail sent",
  "data": {}
}
```

### Password Reset

#### PUT /api/auth/forgot-password-request

Request password reset email.

**Request Body:**

```json
{
  "email": "john@example.com"
}
```

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Forgot password link send",
  "data": {}
}
```

#### PUT /api/auth/forgot-password/:forgotPasswordToken

Reset password using reset token from email.

**URL Parameters:**

- `forgotPasswordToken`: Password reset token from the reset email

**Request Body:**

```json
{
  "password": "NewSecurePassword123!"
}
```

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Password updated",
  "data": {}
}
```

## Protected Routes (Authentication Required)

All protected routes require a valid JWT token sent as an HTTP-only cookie.

### Profile Management

#### GET /api/auth/

Get current user profile information.

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "User loaded",
  "data": {
    "id": "user_id_here",
    "name": "john_doe",
    "email": "john@example.com",
    "role": "USER",
    "isEmailVerified": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

#### GET /api/auth/check

Verify authentication status and get user information.

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "User is authenticated",
  "data": {
    "id": "user_id_here",
    "name": "john_doe",
    "email": "john@example.com",
    "role": "USER",
    "isEmailVerified": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Session Management

#### DELETE /api/auth/logout

Logout current session by clearing the authentication cookie.

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Logged out successfully",
  "data": {}
}
```

### User Progress and Statistics

#### GET /api/auth/solved-problems

Get problems solved by the current user (raw solved problems data).

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Solved problems fetched successfully",
  "data": [
    {
      "id": "solved_id_1",
      "userId": "user_id_here",
      "problemId": "problem_id_1",
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

#### GET /api/auth/solved-problems-list

Get detailed list of solved problems with pagination.

**Query Parameters:**

- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Solved problems fetched successfully",
  "data": {
    "solvedProblems": [
      {
        "id": "problem_id_1",
        "title": "Two Sum",
        "description": "Given an array of integers...",
        "difficulty": "EASY",
        "tags": ["array", "hash-table"],
        "createdAt": "2024-01-01T00:00:00.000Z"
      }
    ],
    "totalPages": 3,
    "currentPage": 1,
    "limit": 10
  }
}
```

### Public User Profiles

#### GET /api/auth/public-profile/:userId

Get public profile information for any user.

**URL Parameters:**

- `userId`: ID of the user whose profile to fetch

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "User profile fetched",
  "data": {
    "user": {
      "id": "user_id_here",
      "name": "john_doe",
      "createdAt": "2024-01-01T00:00:00.000Z"
    },
    "totalHardQuestions": 25,
    "totalMediumQuestions": 50,
    "totalEasyQuestions": 75,
    "totalHardSolved": 5,
    "totalMediumSolved": 15,
    "totalEasySolved": 30,
    "totalSolved": 50,
    "totalQuestions": 150
  }
}
```

## Admin-Only Routes

### User Management Statistics

#### GET /api/auth/recent-registrations

Get recent user registrations (Admin only).

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Recent users fetched successfully",
  "data": {
    "userCount": [
      {
        "name": "user_1"
      },
      {
        "name": "user_2"
      }
    ]
  }
}
```

## Error Responses

### 400 Bad Request

```json
{
  "status": 400,
  "success": false,
  "message": "User already exists",
  "errors": [
    {
      "email": "User already exists"
    }
  ]
}
```

### 401 Unauthorized

```json
{
  "status": 401,
  "success": false,
  "message": "Not Verified",
  "errors": [
    {
      "auth": "Invalid credentials"
    }
  ]
}
```

### 401 Token Expired

```json
{
  "status": 401,
  "success": false,
  "message": "Token Expired, Try resending verification mail",
  "errors": [
    {
      "token": "Token Expired"
    }
  ]
}
```

### 404 Not Found

```json
{
  "status": 404,
  "success": false,
  "message": "User not found"
}
```

### 404 Access Token Expired

```json
{
  "status": 404,
  "success": false,
  "message": "Access Token Expired"
}
```

## Authentication Flow

### Registration Flow

1. User submits registration data
2. System validates input and creates user account
3. Email verification token is generated and sent
4. JWT cookie is set for immediate access
5. User receives verification email
6. User clicks verification link to activate account

### Login Flow

1. User submits email and password
2. System validates credentials
3. JWT token is generated and set as HTTP-only cookie
4. User data is returned in response

### Password Reset Flow

1. User requests password reset with email
2. System generates reset token and sends email
3. User clicks reset link with token
4. User submits new password with token
5. Password is updated and tokens are cleared

## Security Features

### Password Security

- Minimum 6 characters required
- Passwords hashed using bcrypt with salt rounds of 10
- Password reset tokens expire after use

### Token Security

- JWT tokens signed with HS256 algorithm
- Tokens expire in 7 days
- HTTP-only cookies prevent XSS attacks
- Secure cookie settings in production

### Email Verification

- SHA256 hashed tokens for email verification
- Time-limited verification tokens
- Automatic token cleanup after use

### Rate Limiting

Based on express-validator middleware:

- Input validation on all endpoints
- Email format validation
- Password strength requirements

## Database Integration

The system uses Prisma ORM with the following key features:

- User model with roles (USER, ADMIN)
- Email verification tracking
- Password reset token management
- Problem solving progress tracking
- Relationship management between users and solved problems

## Best Practices

### Client Implementation

1. Handle HTTP-only cookies automatically
2. Check authentication status on app initialization
3. Implement proper error handling for all auth states
4. Use the `/check` endpoint for auth verification
5. Handle token expiration gracefully

### Security Considerations

1. Always use HTTPS in production
2. Implement proper CSRF protection
3. Monitor for suspicious login attempts
4. Use secure cookie settings
5. Implement proper session management
6. Validate all input on both client and server
