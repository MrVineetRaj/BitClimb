# Problem Routes Documentation

## Overview

Problem routes handle all operations related to coding problems including creation, retrieval, deletion, and problem list management. These routes serve both public users and authenticated users with different access levels.

## Base URL

```
/api/problems
```

## Public Routes (No Authentication Required)

### Problem Listing

#### GET /api/problems/get-problems

Get paginated list of problems with optional filtering.

**Query Parameters:**

- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `difficultySort` (optional): Sort order for difficulty (asc, desc) (default: asc)
- `difficulty` (optional): Filter by difficulty (Easy, Medium, Hard)

**Response:**

```json
{
  "status": 200,
  "success": true,
  "message": "Problems fetched successfully",
  "data": {
    "problems": [
      {
        "id": "problem_id_1",
        "title": "Two Sum",
        "tags": ["array", "hash-table"],
        "difficulty": "Easy",
        "solved": false
      }
    ],
    "totalPages": 15,
    "currentPage": 1,
    "limit": 10
  }
}
```

**Note:** If user is authenticated, each problem will include a `solved` boolean indicating if the user has solved it.

#### GET /api/problems/get-problem/:id

Get detailed problem information by ID.

**Response:**

```json
{
  "status": 200,
  "success": true,
  "message": "Problem fetched successfully",
  "data": {
    "id": "problem_id_1",
    "title": "Two Sum",
    "description": "Given an array of integers nums and an integer target...",
    "difficulty": "Easy",
    "tags": ["array", "hash-table"],
    "companies": ["Google", "Amazon"],
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
      }
    ],
    "constraints": ["2 <= nums.length <= 10^4"],
    "hints": ["Use a hash table for O(n) solution"],
    "editorial": "Detailed explanation of the solution approach...",
    "testCases": [
      {
        "input": "[2,7,11,15]\n9",
        "output": "[0,1]"
      }
    ],
    "codeSnippets": {
      "javascript": "function twoSum(nums, target) {\n    // Your code here\n}",
      "python": "def two_sum(nums, target):\n    # Your code here\n    pass"
    },
    "referenceSolutionHeader": {
      "javascript": "// Test runner code",
      "python": "# Test runner code"
    },
    "referenceSolution": {
      "javascript": "function twoSum(nums, target) { ... }",
      "python": "def two_sum(nums, target): ..."
    },
    "referenceSolutionFooter": {
      "javascript": "// Additional test code",
      "python": "# Additional test code"
    },
    "userId": "creator_user_id",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## Protected Routes (Authentication Required)

### Problem Management (Admin Only)

#### POST /api/problems/create-problem

Create a new problem. Requires admin privileges.

**Headers:**

```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**Request Body:**

```json
{
  "title": "Two Sum",
  "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  "difficulty": "Easy",
  "tags": ["array", "hash-table"],
  "companies": ["Google", "Amazon"],
  "examples": [
    {
      "input": "nums = [2,7,11,15], target = 9",
      "output": "[0,1]",
      "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
    }
  ],
  "constraints": ["2 <= nums.length <= 10^4"],
  "hints": ["Use a hash table for O(n) solution"],
  "editorial": "Detailed explanation...",
  "testCases": [
    {
      "input": "[2,7,11,15]\n9",
      "output": "[0,1]"
    }
  ],
  "codeSnippetsHeader": {
    "javascript": "// Setup code",
    "python": "# Setup code"
  },
  "codeSnippets": {
    "javascript": "function twoSum(nums, target) {\n    // Your code here\n}",
    "python": "def two_sum(nums, target):\n    # Your code here\n    pass"
  },
  "codeSnippetsFooter": {
    "javascript": "// Footer code",
    "python": "# Footer code"
  },
  "referenceSolutionHeader": {
    "javascript": "// Test runner header",
    "python": "# Test runner header"
  },
  "referenceSolution": {
    "javascript": "function twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (map.has(complement)) {\n            return [map.get(complement), i];\n        }\n        map.set(nums[i], i);\n    }\n    return [];\n}",
    "python": "def two_sum(nums, target):\n    num_map = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in num_map:\n            return [num_map[complement], i]\n        num_map[num] = i\n    return []"
  },
  "referenceSolutionFooter": {
    "javascript": "// Test runner footer",
    "python": "# Test runner footer"
  }
}
```

**Response:**

```json
{
  "status": 201,
  "success": true,
  "message": "Problem created successfully with reference solution",
  "data": {
    "problemId": "new_problem_id"
  }
}
```

**Validation Process:**

- The system validates reference solutions by running them against test cases using Judge0
- All provided programming languages must pass the test cases
- If any language fails validation, the problem creation is rejected

#### DELETE /api/problems/delete-problem/:id

Delete a problem. Requires admin privileges and user must be the creator.

**Response:**

```json
{
  "status": 200,
  "success": true,
  "message": "Problem deleted successfully",
  "data": {}
}
```

### User Progress (Authentication Required)

#### GET /api/problems/solved-problems

Get problems solved by the authenticated user.

**Response:**

```json
{
  "status": 200,
  "success": true,
  "message": "Solved problems fetched successfully",
  "data": [
    {
      "id": "problem_id_1",
      "title": "Two Sum",
      "difficulty": "Easy",
      "tags": ["array", "hash-table"],
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

## Problem List Management

### Base URL for Problem Lists

```
/api/problem-lists
```

#### GET /api/problem-lists/

Get all problem lists for the authenticated user.

**Response:**

```json
{
  "status": 200,
  "success": true,
  "message": "Problem lists fetched successfully",
  "data": [
    {
      "id": "list_id_1",
      "title": "Array Problems",
      "description": "Collection of array-based problems",
      "problemCount": 15,
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

#### GET /api/problem-lists/:id

Get specific problem list with problems.

#### POST /api/problem-lists/

Create a new problem list.

**Request Body:**

```json
{
  "title": "Dynamic Programming",
  "description": "Problems focusing on DP concepts",
  "problems": ["problem_id_1", "problem_id_2"]
}
```

#### PUT /api/problem-lists/:id

Update problem list details.

#### DELETE /api/problem-lists/:id

Delete a problem list.

#### POST /api/problem-lists/:id/add-problem

Add a problem to the list.

**Request Body:**

```json
{
  "problemId": "problem_id_to_add"
}
```

#### POST /api/problem-lists/:id/remove-problem

Remove a problem from the list.

**Request Body:**

```json
{
  "problemId": "problem_id_to_remove"
}
```

## Error Responses

### 400 Bad Request

```json
{
  "status": 400,
  "success": false,
  "message": "Title, description, and difficulty are required"
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

### 403 Forbidden

```json
{
  "status": 403,
  "success": false,
  "message": "You are not authorized to create a problem"
}
```

### 404 Not Found

```json
{
  "status": 404,
  "success": false,
  "message": "Problem not found"
}
```

### 500 Internal Server Error

```json
{
  "status": 500,
  "success": false,
  "message": "Judge0 submission failed for language: javascript",
  "error": {
    "status": {
      "id": 6,
      "description": "Compilation Error"
    },
    "compile_output": "Error details..."
  }
}
```

## Supported Programming Languages

The system supports multiple programming languages through Judge0 integration:

- **JavaScript** (Node.js)
- **Python**
- **Java**
- **C++**
- **C**
- **Go**
- **Rust**

## Code Execution and Validation

### Reference Solution Validation

When creating a problem, the system:

1. Combines `referenceSolutionHeader` + `referenceSolution` + `referenceSolutionFooter`
2. Submits the complete code to Judge0 for each language
3. Runs against all provided test cases
4. Validates that all test cases pass (status.id === 3)
5. Rejects problem creation if any language fails

### Test Case Format

- **Input**: String format, can include multiple lines
- **Output**: Expected output string
- Test cases are concatenated for batch submission to Judge0

## Database Schema

### Problem Model

- `id`: Unique identifier
- `title`: Problem title
- `description`: Problem description
- `difficulty`: Enum (Easy, Medium, Hard)
- `tags`: Array of tags
- `companies`: Array of company names
- `examples`: Array of example objects
- `constraints`: Array of constraint strings
- `hints`: Array of hint strings
- `editorial`: Editorial content
- `testCases`: Array of test case objects
- `codeSnippets`: Object with language-specific code templates
- `referenceSolution*`: Objects with language-specific solutions
- `userId`: Creator's user ID
- `createdAt`, `updatedAt`: Timestamps

### Problem Lists Model

- User-specific collections of problems
- Many-to-many relationship with problems
- Support for custom organization

## Rate Limiting

### Problem Creation

- Admin only: No specific rate limits (reasonable usage expected)

### Problem Retrieval

- Public endpoints: 100 requests per minute per IP
- Authenticated endpoints: 200 requests per minute per user

### Problem List Operations

- 50 operations per minute per user

## Security Features

### Admin Authorization

- Problem creation requires admin role
- Problem deletion requires admin role and ownership
- Validation through `adminAuthMiddleware`

### Input Validation

- Required field validation for problem creation
- Code validation through Judge0 before saving
- Sanitization of user inputs

### Code Execution Safety

- All code execution handled by Judge0 sandbox
- No direct code execution on application server
- Resource limits enforced by Judge0

## Best Practices

### Problem Creation

1. Provide comprehensive test cases covering edge cases
2. Include clear examples and explanations
3. Test reference solutions thoroughly before submission
4. Use appropriate difficulty ratings
5. Add relevant tags for discoverability

### API Usage

1. Implement pagination for problem listings
2. Cache problem data on client side when appropriate
3. Handle Judge0 validation errors gracefully
4. Use authentication for personalized features
5. Implement proper error handling for all endpoints
