# Problem Lists Routes Documentation

## Overview

Problem lists routes handle operations for user-created collections of problems. These routes allow users to organize problems into custom lists for study, practice, or categorization purposes. All routes require authentication.

## Base URL

```
/api/problem-lists
```

## Database Schema

The problem lists system uses the following database models:

### ProblemList Model

- `id`: Unique identifier (string)
- `name`: List name (string) - stored as `title` in requests
- `description`: Optional description (string)
- `userId`: Owner's user ID (string)
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

### ProblemInProblemList Model (Junction Table)

- `id`: Unique identifier (string)
- `problemListId`: Reference to problem list
- `problemId`: Reference to problem
- `createdAt`: Addition timestamp
- `updatedAt`: Last update timestamp

## Protected Routes (Authentication Required)

All problem-list routes require valid authentication via JWT token.

### List Management

#### GET /api/problem-lists/

Get all problem lists for the authenticated user.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Problem lists retrieved successfully",
  "data": [
    {
      "id": "list_id_1",
      "name": "Dynamic Programming Problems",
      "description": "Collection of DP problems for interview prep",
      "userId": "user_id_here",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    },
    {
      "id": "list_id_2",
      "name": "Graph Algorithms",
      "description": "Graph theory and algorithm problems",
      "userId": "user_id_here",
      "createdAt": "2024-01-02T00:00:00.000Z",
      "updatedAt": "2024-01-02T00:00:00.000Z"
    }
  ]
}
```

**Behavior:**

- Returns lists ordered by creation date (newest first)
- Only returns lists owned by the authenticated user
- Empty array if user has no lists

#### GET /api/problem-lists/:id

Get specific problem list with associated problems.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**URL Parameters:**

- `id`: Problem list ID (string, required)

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Problem list retrieved successfully",
  "data": {
    "id": "list_id_1",
    "name": "Dynamic Programming Problems",
    "description": "Collection of DP problems for interview prep",
    "userId": "user_id_here",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "problems": [
      {
        "id": "junction_id_1",
        "problemListId": "list_id_1",
        "problemId": "problem_id_1",
        "createdAt": "2024-01-01T01:00:00.000Z",
        "updatedAt": "2024-01-01T01:00:00.000Z",
        "problem": {
          "id": "problem_id_1",
          "title": "Longest Common Subsequence",
          "description": "Find the longest common subsequence...",
          "difficulty": "MEDIUM",
          "tags": ["dynamic-programming", "string"],
          "companies": ["Google", "Amazon"],
          "examples": [...],
          "constraints": [...],
          "hints": [...],
          "editorial": "...",
          "testCases": [...],
          "codeSnippets": {...},
          "userId": "creator_id",
          "createdAt": "2024-01-01T00:00:00.000Z",
          "updatedAt": "2024-01-01T00:00:00.000Z",
          "isPublic": true
        }
      }
    ]
  }
}
```

**Security:**

- Only returns lists owned by the authenticated user
- Includes full problem details for each problem in the list

#### POST /api/problem-lists/

Create a new problem list.

**Headers:**

```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**Request Body:**

```json
{
  "title": "Binary Tree Problems",
  "description": "Collection of binary tree algorithms and problems"
}
```

**Validation Rules:**

- `title`: Required, non-empty string
- `description`: Optional string

**Response (Success):**

```json
{
  "status": 201,
  "success": true,
  "message": "Problem list created successfully",
  "data": {
    "id": "new_list_id",
    "name": "Binary Tree Problems",
    "description": "Collection of binary tree algorithms and problems",
    "userId": "user_id_here",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

#### PUT /api/problem-lists/:id

Update problem list details.

**Headers:**

```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**URL Parameters:**

- `id`: Problem list ID (string, required)

**Request Body:**

```json
{
  "title": "Advanced Binary Tree Problems",
  "description": "Updated collection focusing on advanced tree algorithms"
}
```

**Validation Rules:**

- `title`: Required, non-empty string
- `description`: Optional string

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Problem list updated successfully",
  "data": {
    "id": "list_id_1",
    "name": "Advanced Binary Tree Problems",
    "description": "Updated collection focusing on advanced tree algorithms",
    "userId": "user_id_here",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Security:**

- Only allows updates to lists owned by the authenticated user
- Updates the `updatedAt` timestamp automatically

#### DELETE /api/problem-lists/:id

Delete a problem list and all its associations.

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**URL Parameters:**

- `id`: Problem list ID (string, required)

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Problem list deleted successfully",
  "data": {}
}
```

**Behavior:**

- Deletes the problem list and all associated `ProblemInProblemList` records
- Only allows deletion of lists owned by the authenticated user
- Cascade deletion handled by database constraints

### Problem Management in Lists

#### POST /api/problem-lists/:id/add-problem

Add a problem to the specified list.

**Headers:**

```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**URL Parameters:**

- `id`: Problem list ID (string, required)

**Request Body:**

```json
{
  "problemId": "problem_id_to_add"
}
```

**Response (Success):**

```json
{
  "status": 201,
  "success": true,
  "message": "Problem added to list successfully",
  "data": {
    "id": "new_junction_id",
    "problemListId": "list_id_1",
    "problemId": "problem_id_to_add",
    "userId": "user_id_here",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Validation:**

- Verifies the problem list exists and belongs to the user
- Verifies the problem exists
- Prevents duplicate entries (handled by database constraints)

#### POST /api/problem-lists/:id/remove-problem

Remove a problem from the specified list.

**Headers:**

```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**URL Parameters:**

- `id`: Problem list ID (string, required)

**Request Body:**

```json
{
  "problemId": "problem_id_to_remove"
}
```

**Response (Success):**

```json
{
  "status": 200,
  "success": true,
  "message": "Problem removed from list successfully",
  "data": {}
}
```

**Note:** This endpoint is defined in routes but not yet implemented in the controller.

## Error Responses

### 400 Bad Request - Missing Required Fields

```json
{
  "status": 400,
  "success": false,
  "message": "Title and User ID are required"
}
```

### 400 Bad Request - Invalid Input

```json
{
  "status": 400,
  "success": false,
  "message": "Problem list ID, Problem ID, and User ID are required"
}
```

### 401 Unauthorized

```json
{
  "status": 401,
  "success": false,
  "message": "Authentication required"
}
```

### 404 Not Found - Problem List

```json
{
  "status": 404,
  "success": false,
  "message": "Problem list not found or you are not authorized"
}
```

### 404 Not Found - Problem

```json
{
  "status": 404,
  "success": false,
  "message": "Problem not found"
}
```

### 409 Conflict - Duplicate Entry

```json
{
  "status": 409,
  "success": false,
  "message": "Problem already exists in this list"
}
```

## Implementation Details

### Authentication & Authorization

- All routes require valid JWT authentication
- Users can only access their own problem lists
- User ID is extracted from the authenticated user context
- No admin-specific functionality for problem lists

### Data Relationships

- **One-to-Many**: User → ProblemLists (one user can have many lists)
- **Many-to-Many**: ProblemLists ↔ Problems (via `ProblemInProblemList` junction table)
- Junction table includes additional metadata like creation timestamps

### Database Operations

- Uses Prisma ORM for all database operations
- Includes proper relations with `include` for fetching associated data
- Handles cascade deletion for list removal
- Uses database constraints to prevent duplicate problem-list associations

### Validation Strategy

- Server-side validation for all required fields
- User ownership validation on all operations
- Existence validation for referenced entities (problems, lists)
- Input sanitization handled by request validation middleware

## Frontend Integration

### Zod Validation Schema

Based on the codebase, the frontend uses:

```typescript
export const createProblemListSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
});
```

### Usage Examples

#### Creating a Problem List

```javascript
const createList = async (listData) => {
  const response = await fetch("/api/problem-lists/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: listData.title,
      description: listData.description,
    }),
  });
  return response.json();
};
```

#### Adding Problems to List

```javascript
const addProblemToList = async (listId, problemId) => {
  const response = await fetch(`/api/problem-lists/${listId}/add-problem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ problemId }),
  });
  return response.json();
};
```

## Best Practices

### API Usage

1. Always validate user authentication before making requests
2. Handle loading states during CRUD operations
3. Implement optimistic updates for better UX
4. Cache problem lists data to reduce API calls
5. Provide clear error messaging for failed operations

### Data Management

1. Use consistent naming conventions (`title` in requests, `name` in database)
2. Implement proper error boundaries for failed operations
3. Validate problem existence before adding to lists
4. Handle duplicate prevention gracefully
5. Provide confirmation dialogs for destructive operations

### Performance Considerations

1. Problem lists include full problem data - consider pagination for large lists
2. Cache frequently accessed lists
3. Implement lazy loading for problem details
4. Use proper database indexing on foreign keys
5. Consider implementing soft delete for better user experience

## Security Considerations

### Access Control

- All operations require valid authentication
- Users can only access their own problem lists
- No cross-user list sharing functionality
- Proper validation of ownership on all operations

### Data Protection

- No sensitive data exposure in problem lists
- User IDs properly validated and sanitized
- Database constraints prevent data corruption
- Proper error handling without information leakage
