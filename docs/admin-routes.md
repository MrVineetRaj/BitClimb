# Admin Routes Documentation

## Overview
Admin routes provide administrative functionality for managing users, problems, contests, and system settings. All admin routes require authentication and admin privileges.

## Authentication
All admin routes require:
- Valid JWT token in Authorization header: `Bearer <token>`
- Admin role privileges

## Base URL
```
/api/admin
```

## Routes

### Authentication & User Management

#### GET /api/admin/users
Get all users with pagination and filtering.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `search` (optional): Search by username or email
- `role` (optional): Filter by role (user/admin)

**Response:**
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "_id": "user_id",
        "username": "john_doe",
        "email": "john@example.com",
        "role": "user",
        "isActive": true,
        "createdAt": "2024-01-01T00:00:00.000Z",
        "lastLogin": "2024-01-15T12:00:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 50,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

#### GET /api/admin/users/:id
Get specific user details.

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "user_id",
    "username": "john_doe",
    "email": "john@example.com",
    "role": "user",
    "isActive": true,
    "profile": {
      "firstName": "John",
      "lastName": "Doe",
      "bio": "Software Developer"
    },
    "stats": {
      "problemsSolved": 25,
      "contestsParticipated": 5,
      "totalSubmissions": 100
    },
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### PUT /api/admin/users/:id
Update user information.

**Request Body:**
```json
{
  "username": "new_username",
  "email": "new@example.com",
  "role": "admin",
  "isActive": false
}
```

#### DELETE /api/admin/users/:id
Delete a user account.

**Response:**
```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

### Problem Management

#### GET /api/admin/problems
Get all problems with admin details.

**Query Parameters:**
- `page`, `limit`: Pagination
- `difficulty`: Filter by difficulty
- `status`: Filter by status (draft/published/archived)
- `author`: Filter by author

**Response:**
```json
{
  "success": true,
  "data": {
    "problems": [
      {
        "_id": "problem_id",
        "title": "Two Sum",
        "difficulty": "Easy",
        "status": "published",
        "author": "admin_id",
        "submissions": 150,
        "acceptanceRate": 65.5,
        "createdAt": "2024-01-01T00:00:00.000Z"
      }
    ],
    "pagination": {...}
  }
}
```

#### POST /api/admin/problems
Create a new problem.

**Request Body:**
```json
{
  "title": "New Problem",
  "description": "Problem description...",
  "difficulty": "Medium",
  "tags": ["array", "hash-table"],
  "testCases": [
    {
      "input": "nums = [2,7,11,15], target = 9",
      "output": "[0,1]",
      "isHidden": false
    }
  ],
  "constraints": "1 <= nums.length <= 10^4",
  "hints": ["Use hash table for O(n) solution"]
}
```

#### PUT /api/admin/problems/:id
Update problem details.

#### DELETE /api/admin/problems/:id
Delete a problem.

#### PUT /api/admin/problems/:id/status
Change problem status (draft/published/archived).

**Request Body:**
```json
{
  "status": "published"
}
```

### Contest Management

#### GET /api/admin/contests
Get all contests with admin details.

**Response:**
```json
{
  "success": true,
  "data": {
    "contests": [
      {
        "_id": "contest_id",
        "title": "Weekly Contest 1",
        "status": "upcoming",
        "startTime": "2024-02-01T10:00:00.000Z",
        "endTime": "2024-02-01T12:00:00.000Z",
        "participants": 45,
        "problems": ["problem_id_1", "problem_id_2"],
        "createdBy": "admin_id"
      }
    ]
  }
}
```

#### POST /api/admin/contests
Create a new contest.

**Request Body:**
```json
{
  "title": "Monthly Contest",
  "description": "Contest description...",
  "startTime": "2024-02-01T10:00:00.000Z",
  "endTime": "2024-02-01T12:00:00.000Z",
  "problems": ["problem_id_1", "problem_id_2"],
  "isPublic": true,
  "maxParticipants": 100
}
```

#### PUT /api/admin/contests/:id
Update contest details.

#### DELETE /api/admin/contests/:id
Delete a contest.

#### GET /api/admin/contests/:id/leaderboard
Get contest leaderboard with admin details.

### Submission Management

#### GET /api/admin/submissions
Get all submissions with filtering.

**Query Parameters:**
- `page`, `limit`: Pagination
- `userId`: Filter by user
- `problemId`: Filter by problem
- `status`: Filter by status
- `language`: Filter by programming language

**Response:**
```json
{
  "success": true,
  "data": {
    "submissions": [
      {
        "_id": "submission_id",
        "user": {
          "_id": "user_id",
          "username": "john_doe"
        },
        "problem": {
          "_id": "problem_id",
          "title": "Two Sum"
        },
        "language": "javascript",
        "status": "accepted",
        "runtime": 68,
        "memory": 42.1,
        "submittedAt": "2024-01-15T10:30:00.000Z"
      }
    ],
    "pagination": {...}
  }
}
```

#### GET /api/admin/submissions/:id
Get detailed submission information including code.

#### DELETE /api/admin/submissions/:id
Delete a submission.

### System Analytics

#### GET /api/admin/analytics/overview
Get system overview statistics.

**Response:**
```json
{
  "success": true,
  "data": {
    "users": {
      "total": 1250,
      "active": 890,
      "newThisMonth": 45
    },
    "problems": {
      "total": 150,
      "published": 120,
      "draft": 30
    },
    "submissions": {
      "total": 15000,
      "todayCount": 250,
      "acceptanceRate": 68.5
    },
    "contests": {
      "total": 25,
      "active": 2,
      "upcoming": 3
    }
  }
}
```

#### GET /api/admin/analytics/users
Get user analytics and statistics.

#### GET /api/admin/analytics/problems
Get problem performance analytics.

#### GET /api/admin/analytics/submissions
Get submission trends and statistics.

### System Settings

#### GET /api/admin/settings
Get system configuration settings.

#### PUT /api/admin/settings
Update system settings.

**Request Body:**
```json
{
  "maintenanceMode": false,
  "allowRegistration": true,
  "maxSubmissionsPerDay": 100,
  "supportedLanguages": ["javascript", "python", "java", "cpp"]
}
```

### User Roles & Permissions

#### PUT /api/admin/users/:id/role
Change user role.

**Request Body:**
```json
{
  "role": "admin"
}
```

#### PUT /api/admin/users/:id/status
Update user account status.

**Request Body:**
```json
{
  "isActive": false,
  "reason": "Violation of terms"
}
```

## Error Responses

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Access denied. Admin privileges required."
}
```

### 403 Forbidden
```json
{
  "success": false,
  "message": "Insufficient permissions for this operation."
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Resource not found."
}
```

### 422 Validation Error
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "title",
      "message": "Title is required"
    }
  ]
}
```

### 500 Server Error
```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Rate Limiting
Admin routes have higher rate limits:
- 1000 requests per hour per IP
- 500 requests per 15 minutes per user

## Security Notes
- All admin operations are logged
- Sensitive operations require additional verification
- Admin sessions have shorter expiry times
- IP whitelisting recommended for production