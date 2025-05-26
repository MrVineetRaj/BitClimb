# User API Documentation

This document provides details about the user-related endpoints of the API.

## Base URL

```
/api/v1/user
```

## Authentication

Most endpoints require authentication using JWT tokens sent via cookies.

---

## Register User

Create a new user account.

**URL**: `/api/v1/user/register`

**Method**: `POST`

**Auth required**: No

### Request Body

```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "password": "securepassword123",
  "role": "USER" // Optional, defaults to "USER"
}
```

### Success Response

**Code**: `201 CREATED`

```json
{
  "statusCode": 201,
  "data": {
    "user": {
      "id": "user-uuid",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "USER"
    }
  },
  "message": "Verification Mail Sent"
}
```

### Error Response

**Code**: `400 BAD REQUEST`

```json
{
  "success": false,
  "message": "User already exists",
  "errors": [
    {
      "email": "User already exists"
    }
  ]
}
```

---

## Login User

Authenticate and login to user account.

**URL**: `/api/v1/user/login`

**Method**: `POST`

**Auth required**: No

### Request Body

```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

### Success Response

**Code**: `200 OK`

```json
{
  "statusCode": 200,
  "data": {
    "id": "user-uuid",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "USER",
    "isEmailVerified": true
  },
  "message": "Logged in successfully"
}
```

### Error Response

**Code**: `401 UNAUTHORIZED`

```json
{
  "success": false,
  "message": "Not Verified",
  "errors": [
    {
      "auth": "Invalid credentials"
    }
  ]
}
```

---

## Verify Email

Verify user's email using the token sent to their email.

**URL**: `/api/v1/user/verify-email/:token`

**Method**: `GET`

**Auth required**: No

### URL Parameters

- **token**: Verification token sent to user's email

### Success Response

**Code**: `200 OK`

```json
{
  "statusCode": 200,
  "data": {
    "user": {
      "id": "user-uuid",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "USER"
    }
  },
  "message": "Account Verified"
}
```

### Error Response

**Code**: `401 UNAUTHORIZED`

```json
{
  "success": false,
  "message": "Not Verified",
  "errors": [
    {
      "token": "Token Expired"
    }
  ]
}
```

---

## Resend Verification Email

Request a new verification email if the previous one expired.

**URL**: `/api/v1/user/resend-verification-email`

**Method**: `POST`

**Auth required**: No

### Request Body

```json
{
  "email": "user@example.com"
}
```

### Success Response

**Code**: `200 OK`

```json
{
  "statusCode": 200,
  "data": {},
  "message": "Verification mail sent"
}
```

### Error Response

**Code**: `401 UNAUTHORIZED`

```json
{
  "success": false,
  "message": "Token sending failed",
  "errors": [
    {
      "err": "User not found"
    }
  ]
}
```

---

## Forgot Password Request

Request a password reset link.

**URL**: `/api/v1/user/forgot-password-request`

**Method**: `PUT`

**Auth required**: No

### Request Body

```json
{
  "email": "user@example.com"
}
```

### Success Response

**Code**: `200 OK`

```json
{
  "statusCode": 200,
  "data": {},
  "message": "Forgot password link send"
}
```

### Error Response

**Code**: `400 BAD REQUEST`

```json
{
  "success": false,
  "message": "Invalid Email",
  "errors": []
}
```

---

## Reset Password

Reset password using the token received via email.

**URL**: `/api/v1/user/forgot-password/:forgotPasswordToken`

**Method**: `PUT`

**Auth required**: No

### URL Parameters

- **forgotPasswordToken**: Token received via email

### Request Body

```json
{
  "password": "newSecurePassword123"
}
```

### Success Response

**Code**: `200 OK`

```json
{
  "statusCode": 200,
  "data": {},
  "message": "Password updated"
}
```

### Error Response

**Code**: `404 NOT FOUND`

```json
{
  "success": false,
  "message": "Access Token Expired",
  "errors": []
}
```

---

## Get Current User

Get details of the currently logged-in user.

**URL**: `/api/v1/user/`

**Method**: `GET`

**Auth required**: Yes (JWT token in cookie)

### Success Response

**Code**: `200 OK`

```json
{
  "statusCode": 200,
  "data": {
    "id": "user-uuid",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "USER",
    "isEmailVerified": true
  },
  "message": "User loaded"
}
```

### Error Response

**Code**: `401 UNAUTHORIZED`

```json
{
  "success": false,
  "message": "Unauthorized access",
  "errors": []
}
```

---

## Logout User

Logout the currently authenticated user.

**URL**: `/api/v1/user/logout`

**Method**: `DELETE`

**Auth required**: Yes (JWT token in cookie)

### Success Response

**Code**: `200 OK`

```json
{
  "statusCode": 200,
  "data": {},
  "message": "Logged out successfully"
}
```

### Error Response

**Code**: `401 UNAUTHORIZED`

```json
{
  "success": false,
  "message": "Unauthorized access",
  "errors": []
}
```
