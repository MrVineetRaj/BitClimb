# Contest API Documentation

Base URL: `/api/v1/contest`

## Authentication

Most endpoints require authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

Admin endpoints require additional admin privileges.

## Endpoints

### 1. Create Contest

**POST** `/`

Creates a new contest. Requires admin authentication.

**Authentication:** Required (Admin only)

**Request Body:**

```json
{
  "title": "String (required)",
  "description": "String (optional)",
  "startTime": "ISO8601 date string (required)",
  "endTime": "ISO8601 date string (required)",
  "problems": ["array of problem IDs (required, min 1)"],
  "problemIndex": ["array of integers (required)"],
  "problemPoints": ["array of integers (required)"]
}
```

**Validation Rules:**

- `title`: Required string
- `description`: Optional string
- `startTime`: Required valid ISO8601 date
- `endTime`: Required valid ISO8601 date
- `problems`: Required array with at least one problem ID
- `problemIndex`: Required array of problem indices
- `problemPoints`: Required array of points for each problem

**Example Request:**

```json
{
  "title": "Weekly Contest #1",
  "description": "First weekly programming contest",
  "startTime": "2024-01-15T10:00:00Z",
  "endTime": "2024-01-15T12:00:00Z",
  "problems": ["problem-id-1", "problem-id-2", "problem-id-3"],
  "problemIndex": [1, 2, 3],
  "problemPoints": [100, 200, 300]
}
```

**Success Response (201):**

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Contest created successfully",
  "data": {}
}
```

**Error Responses:**

- `400`: Validation errors
- `403`: Not an admin
- `500`: Server error

---

### 2. Get All Contests

**GET** `/`

Retrieves contests based on type (upcoming/ongoing or past).

**Authentication:** Not required

**Query Parameters:**

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `typeOfContest`: "BANNER" for upcoming/ongoing contests, "DEFAULT" for past contests

**Example Request:**

```
GET /api/v1/contest?page=1&limit=10&typeOfContest=BANNER
```

**Success Response (200):**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Contest fetched",
  "data": [
    {
      "id": "contest-id-1",
      "title": "Weekly Contest #1",
      "description": "First weekly programming contest",
      "startTime": "2024-01-15T10:00:00Z",
      "endTime": "2024-01-15T12:00:00Z",
      "isRankingCompleted": false
    }
  ]
}
```

---

### 3. Get Contest Details

**GET** `/:contestId`

Retrieves detailed information about a specific contest.

**Authentication:** Required

**Path Parameters:**

- `contestId`: Contest ID

**Success Response (200):**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Contest details fetched",
  "data": {
    "id": "contest-id-1",
    "title": "Weekly Contest #1",
    "description": "First weekly programming contest",
    "startTime": "2024-01-15T10:00:00Z",
    "endTime": "2024-01-15T12:00:00Z",
    "isRankingCompleted": false,
    "problems": [
      {
        "id": "contest-problem-id-1",
        "contestId": "contest-id-1",
        "problemId": "problem-id-1",
        "problemIndex": 1,
        "points": 100
      }
    ]
  }
}
```

**Error Responses:**

- `404`: Contest not found
- `401`: Authentication required

---

### 4. Update Contest

**PUT** `/:contestId`

Updates an existing contest. Requires admin authentication.

**Authentication:** Required (Admin only)

**Path Parameters:**

- `contestId`: Contest ID

**Request Body:** Same as create contest

**Note:** Implementation pending (marked as TODO in controller)

---

### 5. Delete Contest

**DELETE** `/:contestId`

Deletes a contest. Requires admin authentication.

**Authentication:** Required (Admin only)

**Path Parameters:**

- `contestId`: Contest ID

**Note:** Implementation pending (marked as TODO in controller)

---

### 6. Get Contest Problems

**GET** `/:contestId/problems`

Retrieves all problems for a specific contest.

**Authentication:** Required

**Path Parameters:**

- `contestId`: Contest ID

**Note:** Implementation pending (marked as TODO in controller)

---

### 7. Get Contest Submissions

**GET** `/:contestId/submissions`

Retrieves all submissions for a specific contest.

**Authentication:** Required

**Path Parameters:**

- `contestId`: Contest ID

**Note:** Implementation pending (marked as TODO in controller)

---

### 8. Register for Contest

**POST** `/:contestId/register`

Registers the authenticated user for a contest.

**Authentication:** Required

**Path Parameters:**

- `contestId`: Contest ID

**Success Response (200):**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Successfully registered for contest"
}
```

**Error Responses:**

- `404`: Contest not found
- `400`: Already registered or registration closed
- `401`: Authentication required

---

### 9. Unregister from Contest

**POST** `/:contestId/unregister`

Unregisters the authenticated user from a contest.

**Authentication:** Required

**Path Parameters:**

- `contestId`: Contest ID

**Note:** Implementation pending (marked as TODO in controller)

---

### 10. Get Contest Leaderboard

**GET** `/:contestId/leaderboard`

Retrieves the live leaderboard for a contest.

**Authentication:** Required

**Path Parameters:**

- `contestId`: Contest ID

**Success Response (200):**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Live rank list fetched",
  "data": {
    "leaderboard": [
      {
        "userId": "user-id-1",
        "name": "John Doe",
        "submissions": [
          {
            "id": "submission-id-1",
            "contestProblemId": "contest-problem-id-1",
            "status": "Accepted",
            "createdAt": "2024-01-15T10:30:00Z",
            "user": {
              "name": "John Doe"
            }
          }
        ]
      }
    ],
    "currentRankOfUser": 1
  }
}
```

**Leaderboard Sorting:**

- Users are ranked by number of accepted submissions (descending)
- In case of ties, earlier submissions get higher rank

---

### 11. Update User Rating

**POST** `/:contestId/update-rating`

Updates user ratings after contest completion. Requires admin authentication.

**Authentication:** Required (Admin only)

**Path Parameters:**

- `contestId`: Contest ID

**Note:** Implementation pending (marked as TODO in controller)

---

## Error Handling

All endpoints return errors in the following format:

```json
{
  "success": false,
  "statusCode": 400,
  "message": "Error message",
  "errors": [
    {
      "field": "error description"
    }
  ]
}
```

Common HTTP Status Codes:

- `200`: Success
- `201`: Created
- `400`: Bad Request (validation errors)
- `401`: Unauthorized
- `403`: Forbidden (admin access required)
- `404`: Not Found
- `500`: Internal Server Error

## Contest Rating System

The system includes an automated rating calculation based on:

- Problem completion time
- Statistical normalization across all participants
- Point values assigned to each problem
- Contest performance metrics

Rating updates are processed automatically every hour for completed contests.

## Data Models

### Contest

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "startTime": "datetime",
  "endTime": "datetime",
  "isRankingCompleted": "boolean"
}
```

### Contest Problem

```json
{
  "id": "string",
  "contestId": "string",
  "problemId": "string",
  "problemIndex": "number",
  "points": "number"
}
```

### Contest Submission

```json
{
  "id": "string",
  "userId": "string",
  "contestId": "string",
  "contestProblemId": "string",
  "status": "string",
  "createdAt": "datetime"
}
```

### Contest Participation

```json
{
  "userId": "string",
  "contestId": "string",
  "registeredAt": "datetime"
}
```
