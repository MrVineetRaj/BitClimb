# 6.Factorial of a Number
   - **Difficulty:** Easy
   - **Topic Tags:** Math, Recursion, Iteration, Number Theory
   - **Company Tags:** IBM, Oracle, Salesforce, ByteDance

## Problem Description

Given a non-negative integer n, write a program to calculate its factorial. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. It is denoted by n! and is defined as:
- 0! = 1 (by definition)
- n! = n × (n-1) × (n-2) × ... × 2 × 1 for n > 0

You need to implement a function that takes an integer as input and returns its factorial.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 0 ≤ n ≤ 20 (to avoid overflow issues)

## Examples

**Example 1:**
```
Input: n = 5
Output: 120
Explanation: 5! = 5 × 4 × 3 × 2 × 1 = 120
```

**Example 2:**
```
Input: n = 0
Output: 1
Explanation: 0! = 1 by definition
```

## Test Cases

**Test Case 1:**
```
Input:
3
5
0
3

Output:
120
1
6
```

**Test Case 2:**
```
Input:
2
4
1

Output:
24
1
```

**Test Case 3:**
```
Input:
4
10
7
2
6

Output:
3628800
5040
2
720
```

## Code Templates

### JavaScript
````javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Solution {
    factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

let input = '';
rl.on('line', (line) => {
    input += line + '\n';
});

rl.on('close', () => {
    const lines = input.trim().split('\n');
    const t = parseInt(lines[0]);
    const solution = new Solution();
    
    for (let i = 1; i <= t; i++) {
        const n = parseInt(lines[i]);
        const result = solution.factorial(n);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def factorial(self, n):
        if n == 0 or n == 1:
            return 1
        result = 1
        for i in range(2, n + 1):
            result *= i
        return result

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        n = int(lines[i])
        result = solution.factorial(n)
        print(result)

if __name__ == "__main__":
    main()
````

### C++
````cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    long long factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        long long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
};

int main() {
    string input;
    string line;
    
    // Read all input
    while (getline(cin, line)) {
        input += line + "\n";
    }
    
    stringstream ss(input);
    int t;
    ss >> t;
    
    Solution solution;
    
    for (int i = 0; i < t; i++) {
        int n;
        ss >> n;
        long long result = solution.factorial(n);
        cout << result << endl;
    }
    
    return 0;
}
````
# 7. Check Palindrome String

  - **Difficulty:** Medium
  - **Topic Tags:** String, Two Pointers, Pattern Matching
  - **Company Tags:** Google, Microsoft, Facebook, Amazon


## Problem Description

Given a string, write a program to check if it is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. For this problem, consider only alphanumeric characters and ignore case sensitivity.

You need to implement a function that takes a string as input and returns true if it's a palindrome, false otherwise.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ length of string ≤ 10⁵
- String may contain letters, digits, spaces, and special characters
- Case insensitive comparison
- Ignore non-alphanumeric characters

## Hints

1. Convert the string to lowercase and remove non-alphanumeric characters
2. Use two pointers approach - one from start and one from end
3. Compare characters at both pointers and move them towards center
4. Alternative: Reverse the cleaned string and compare with original

## Examples

**Example 1:**
```
Input: s = "racecar"
Output: true
Explanation: "racecar" reads the same forward and backward
```

**Example 2:**
```
Input: s = "A man a plan a canal Panama"
Output: true
Explanation: Ignoring spaces and case: "amanaplanacanalpanama" is a palindrome
```

## Test Cases

**Test Case 1:**
```
Input:
3
racecar
hello
A man a plan a canal Panama

Output:
true
false
true
```

**Test Case 2:**
```
Input:
2
Madam
race a car

Output:
true
false
```

**Test Case 3:**
```
Input:
4
Was it a car or a cat I saw
No lemon no melon
programming
12321

Output:
true
true
false
true
```

## Code Templates

### JavaScript
````javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Solution {
    isPalindrome(s) {
        // Clean string: keep only alphanumeric characters and convert to lowercase
        let cleaned = "";
        for (let char of s) {
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
                cleaned += char.toLowerCase();
            }
        }
        
        // Check palindrome using two pointers
        let left = 0;
        let right = cleaned.length - 1;
        
        while (left < right) {
            if (cleaned[left] !== cleaned[right]) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
}

let input = '';
rl.on('line', (line) => {
    input += line + '\n';
});

rl.on('close', () => {
    const lines = input.trim().split('\n');
    const t = parseInt(lines[0]);
    const solution = new Solution();
    
    for (let i = 1; i <= t; i++) {
        const s = lines[i];
        const result = solution.isPalindrome(s);
        console.log(result);
    }
});
````

### Python
````python
# filepath: solution.py
import sys

class Solution:
    def is_palindrome(self, s):
        # Clean string: keep only alphanumeric characters and convert to lowercase
        cleaned = ""
        for char in s:
            if char.isalnum():
                cleaned += char.lower()
        
        # Check palindrome using two pointers
        left = 0
        right = len(cleaned) - 1
        
        while left < right:
            if cleaned[left] != cleaned[right]:
                return False
            left += 1
            right -= 1
        
        return True

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        s = lines[i]
        result = solution.is_palindrome(s)
        print("true" if result else "false")

if __name__ == "__main__":
    main()
````

### C++
````cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        // Clean string: keep only alphanumeric characters and convert to lowercase
        string cleaned = "";
        for (char c : s) {
            if (isalnum(c)) {
                cleaned += tolower(c);
            }
        }
        
        // Check palindrome using two pointers
        int left = 0;
        int right = cleaned.length() - 1;
        
        while (left < right) {
            if (cleaned[left] != cleaned[right]) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
};

int main() {
    string input;
    string line;
    
    // Read all input
    while (getline(cin, line)) {
        input += line + "\n";
    }
    
    stringstream ss(input);
    int t;
    ss >> t;
    ss.ignore(); // Ignore the newline after t
    
    Solution solution;
    
    for (int i = 0; i < t; i++) {
        string s;
        getline(ss, s);
        bool result = solution.isPalindrome(s);
        cout << (result ? "true" : "false") << endl;
    }
    
    return 0;
}
````

# 8.Fibonacci Number


    - **Difficulty:** Medium
    - **Topic Tags:** Math, Dynamic Programming, Recursion
    - **Company Tags:** Apple, Netflix, Adobe, TechCorp

## Problem Description

Given a non-negative integer n, write a program to find the nth Fibonacci number. The Fibonacci sequence is defined as:
- F(0) = 0
- F(1) = 1
- F(n) = F(n-1) + F(n-2) for n > 1

The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

You need to implement a function that takes an integer n as input and returns the nth Fibonacci number.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 0 ≤ n ≤ 40 (to avoid overflow and ensure reasonable computation time)

## Hints

1. Start with base cases: F(0) = 0 and F(1) = 1
2. For efficiency, use iterative approach instead of recursive
3. Keep track of only the last two Fibonacci numbers to calculate the next one
4. Alternative: Use recursion with memoization for cleaner code

## Examples

**Example 1:**
```
Input: n = 5
Output: 5
Explanation: F(5) = F(4) + F(3) = 3 + 2 = 5
```

**Example 2:**
```
Input: n = 0
Output: 0
Explanation: F(0) = 0 by definition
```

## Test Cases

**Test Case 1:**
```
Input:
3
5
0
1

Output:
5
0
1
```

**Test Case 2:**
```
Input:
2
10
7

Output:
55
13
```

**Test Case 3:**
```
Input:
4
2
3
8
15

Output:
1
2
21
610
```

## Code Templates

### JavaScript
````javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Solution {
    fibonacci(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        
        let prev2 = 0;
        let prev1 = 1;
        let current = 0;
        
        for (let i = 2; i <= n; i++) {
            current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }
        
        return current;
    }
}

let input = '';
rl.on('line', (line) => {
    input += line + '\n';
});

rl.on('close', () => {
    const lines = input.trim().split('\n');
    const t = parseInt(lines[0]);
    const solution = new Solution();
    
    for (let i = 1; i <= t; i++) {
        const n = parseInt(lines[i]);
        const result = solution.fibonacci(n);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def fibonacci(self, n):
        if n == 0:
            return 0
        if n == 1:
            return 1
        
        prev2 = 0
        prev1 = 1
        current = 0
        
        for i in range(2, n + 1):
            current = prev1 + prev2
            prev2 = prev1
            prev1 = current
        
        return current

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        n = int(lines[i])
        result = solution.fibonacci(n)
        print(result)

if __name__ == "__main__":
    main()
````

### C++
````cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    long long fibonacci(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        
        long long prev2 = 0;
        long long prev1 = 1;
        long long current = 0;
        
        for (int i = 2; i <= n; i++) {
            current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }
        
        return current;
    }
};

int main() {
    string input;
    string line;
    
    // Read all input
    while (getline(cin, line)) {
        input += line + "\n";
    }
    
    stringstream ss(input);
    int t;
    ss >> t;
    
    Solution solution;
    
    for (int i = 0; i < t; i++) {
        int n;
        ss >> n;
        long long result = solution.fibonacci(n);
        cout << result << endl;
    }
    
    return 0;
}
````
# 9. Find Minimum in Array

   - **Difficulty:** Easy
   - **Topic Tags:** Array, Linear Search, Math
   - **Company Tags:** Tesla, Spotify, Uber, DataFlow

## Problem Description

Given an array of integers, write a program to find the minimum element in the array. You need to iterate through all elements and return the smallest value present in the array.

You need to implement a function that takes an array of integers as input and returns the minimum element from that array.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ n ≤ 10⁵ (size of array)
- -10⁹ ≤ arr[i] ≤ 10⁹ (array elements)

## Hints

1. Initialize the minimum value with the first element of the array
2. Iterate through the remaining elements and compare each with current minimum
3. Update minimum whenever you find a smaller element
4. Alternative: Use built-in min functions after understanding the logic

## Examples

**Example 1:**
```
Input: arr = [3, 7, 1, 9, 2]
Output: 1
Explanation: The minimum element in the array is 1
```

**Example 2:**
```
Input: arr = [-5, -2, -10, -1]
Output: -10
Explanation: Among all negative numbers, -10 is the minimum
```

## Test Cases

**Test Case 1:**
```
Input:
3
5
3 7 1 9 2
4
-5 -2 -10 -1
1
42

Output:
1
-10
42
```

**Test Case 2:**
```
Input:
2
6
10 20 30 5 15 25
3
-100 0 50

Output:
5
-100
```

**Test Case 3:**
```
Input:
4
5
1 1 1 1 1
7
-1000000 500000 -200000 800000 300000 -50000 1000000
2
-1 -2
4
100 200 150 175

Output:
1
-1000000
-2
100
```

## Code Templates

### JavaScript
````javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Solution {
    findMinimum(arr) {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
}

let input = '';
rl.on('line', (line) => {
    input += line + '\n';
});

rl.on('close', () => {
    const lines = input.trim().split('\n');
    const t = parseInt(lines[0]);
    const solution = new Solution();
    
    let lineIndex = 1;
    for (let i = 0; i < t; i++) {
        const n = parseInt(lines[lineIndex]);
        lineIndex++;
        const arr = lines[lineIndex].split(' ').map(Number);
        lineIndex++;
        const result = solution.findMinimum(arr);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def find_minimum(self, arr):
        min_val = arr[0]
        for num in arr:
            if num < min_val:
                min_val = num
        return min_val

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    line_index = 1
    for i in range(t):
        n = int(lines[line_index])
        line_index += 1
        arr = list(map(int, lines[line_index].split()))
        line_index += 1
        result = solution.find_minimum(arr)
        print(result)

if __name__ == "__main__":
    main()
````

### C++
````cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int findMinimum(vector<int>& arr) {
        int minVal = arr[0];
        for (int i = 1; i < arr.size(); i++) {
            if (arr[i] < minVal) {
                minVal = arr[i];
            }
        }
        return minVal;
    }
};

int main() {
    string input;
    string line;
    
    // Read all input
    while (getline(cin, line)) {
        input += line + "\n";
    }
    
    stringstream ss(input);
    int t;
    ss >> t;
    
    Solution solution;
    
    for (int i = 0; i < t; i++) {
        int n;
        ss >> n;
        vector<int> arr(n);
        for (int j = 0; j < n; j++) {
            ss >> arr[j];
        }
        int result = solution.findMinimum(arr);
        cout << result << endl;
    }
    
    return 0;
}
````

# 10. Sum of Digits
   - **Difficulty:** Easy
   - **Topic Tags:** Math, Number Theory, Digit Manipulation
   - **Company Tags:** IBM, Oracle, Salesforce, ByteDance



## Problem Description

Given a positive integer, write a program to find the sum of its digits. You need to extract each digit from the number and calculate their total sum.

For example, if the input number is 1234, the sum of digits would be 1 + 2 + 3 + 4 = 10.

You need to implement a function that takes an integer as input and returns the sum of all its digits.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ n ≤ 10¹⁸ (input number)

## Hints

1. Use modulo operator (%) to extract the last digit
2. Use integer division (/) to remove the last digit
3. Keep adding extracted digits until the number becomes 0
4. Alternative: Convert number to string and iterate through each character

## Examples

**Example 1:**
```
Input: n = 1234
Output: 10
Explanation: 1 + 2 + 3 + 4 = 10
```

**Example 2:**
```
Input: n = 9
Output: 9
Explanation: Single digit number, sum is the number itself
```

## Test Cases

**Test Case 1:**
```
Input:
3
1234
9
567

Output:
10
9
18
```

**Test Case 2:**
```
Input:
2
12345
999

Output:
15
27
```

**Test Case 3:**
```
Input:
4
1
100
9876543210
555

Output:
1
1
45
15
```

## Code Templates

### JavaScript
````javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Solution {
    sumOfDigits(n) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    }
}

let input = '';
rl.on('line', (line) => {
    input += line + '\n';
});

rl.on('close', () => {
    const lines = input.trim().split('\n');
    const t = parseInt(lines[0]);
    const solution = new Solution();
    
    for (let i = 1; i <= t; i++) {
        const n = parseInt(lines[i]);
        const result = solution.sumOfDigits(n);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def sum_of_digits(self, n):
        sum_val = 0
        while n > 0:
            sum_val += n % 10
            n //= 10
        return sum_val

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        n = int(lines[i])
        result = solution.sum_of_digits(n)
        print(result)

if __name__ == "__main__":
    main()
````

### C++
````cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    long long sumOfDigits(long long n) {
        long long sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        return sum;
    }
};

int main() {
    string input;
    string line;
    
    // Read all input
    while (getline(cin, line)) {
        input += line + "\n";
    }
    
    stringstream ss(input);
    int t;
    ss >> t;
    
    Solution solution;
    
    for (int i = 0; i < t; i++) {
        long long n;
        ss >> n;
        long long result = solution.sumOfDigits(n);
        cout << result << endl;
    }
    
    return 0;
}
````

# 11. Check Prime Number
    - **Difficulty:** Medium
    - **Topic Tags:** Math, Number Theory, Prime Numbers
    - **Company Tags:** Google, Facebook, Amazon, Microsoft

## Problem Description

Given a positive integer n, write a program to check whether it is a prime number or not. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

For example:
- 2, 3, 5, 7, 11, 13, 17, 19, 23 are prime numbers
- 1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20 are not prime numbers

You need to implement a function that takes an integer as input and returns true if it's prime, false otherwise.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ n ≤ 10⁶ (input number)

## Hints

1. Handle edge cases: 1 is not prime, 2 is the only even prime number
2. Check divisibility only up to √n for efficiency
3. Skip even numbers after checking for 2
4. If any number from 2 to √n divides n, then n is not prime

## Examples

**Example 1:**
```
Input: n = 7
Output: true
Explanation: 7 has no divisors other than 1 and 7, so it's prime
```

**Example 2:**
```
Input: n = 8
Output: false
Explanation: 8 = 2 × 4, so it has divisors other than 1 and 8
```

## Test Cases

**Test Case 1:**
```
Input:
3
7
8
2

Output:
true
false
true
```

**Test Case 2:**
```
Input:
2
1
17

Output:
false
true
```

**Test Case 3:**
```
Input:
4
29
100
13
15

Output:
true
false
true
false
```

## Code Templates

### JavaScript
````javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Solution {
    isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) {
                return false;
            }
        }
        
        return true;
    }
}

let input = '';
rl.on('line', (line) => {
    input += line + '\n';
});

rl.on('close', () => {
    const lines = input.trim().split('\n');
    const t = parseInt(lines[0]);
    const solution = new Solution();
    
    for (let i = 1; i <= t; i++) {
        const n = parseInt(lines[i]);
        const result = solution.isPrime(n);
        console.log(result);
    }
});
````

### Python
````python
import sys
import math

class Solution:
    def is_prime(self, n):
        if n <= 1:
            return False
        if n <= 3:
            return True
        if n % 2 == 0 or n % 3 == 0:
            return False
        
        i = 5
        while i * i <= n:
            if n % i == 0 or n % (i + 2) == 0:
                return False
            i += 6
        
        return True

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        n = int(lines[i])
        result = solution.is_prime(n)
        print("true" if result else "false")

if __name__ == "__main__":
    main()
````

### C++
````cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }
        
        return true;
    }
};

int main() {
    string input;
    string line;
    
    // Read all input
    while (getline(cin, line)) {
        input += line + "\n";
    }
    
    stringstream ss(input);
    int t;
    ss >> t;
    
    Solution solution;
    
    for (int i = 0; i < t; i++) {
        int n;
        ss >> n;
        bool result = solution.isPrime(n);
        cout << (result ? "true" : "false") << endl;
    }
    
    return 0;
}
````


# 12. Count Words in a Sentence
   - **Difficulty:** Easy
   - **Topic Tags:** String, Parsing, Text Processing
   - **Company Tags:** Twitter, LinkedIn, Slack, Shopify
## Problem Description

Given a sentence (string), write a program to count the number of words in it. Words are separated by one or more spaces. Leading and trailing spaces should be ignored when counting words.

For example, if the input sentence is "Hello world from CodeDrill", the word count would be 4.

You need to implement a function that takes a string as input and returns the count of words in that sentence.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ length of sentence ≤ 10⁵
- Sentence contains only alphabetic characters and spaces
- Multiple consecutive spaces should be treated as single separator

## Hints

1. Trim leading and trailing spaces first
2. Split the sentence by spaces and count non-empty parts
3. Handle multiple consecutive spaces properly
4. Alternative: Iterate through string and count word boundaries

## Examples

**Example 1:**
```
Input: s = "Hello world from CodeDrill"
Output: 4
Explanation: The words are "Hello", "world", "from", "CodeDrill"
```

**Example 2:**
```
Input: s = "  Programming   is   fun  "
Output: 3
Explanation: After trimming spaces, the words are "Programming", "is", "fun"
```

## Test Cases

**Test Case 1:**
```
Input:
3
Hello world from CodeDrill
Programming is fun
Single

Output:
4
3
1
```

**Test Case 2:**
```
Input:
2
  Multiple   spaces   between   words  
The quick brown fox jumps

Output:
4
5
```

**Test Case 3:**
```
Input:
4
One Two Three Four Five
JavaScript Python Java
  Leading and trailing spaces  
A B C D E F G H I J

Output:
5
3
4
10
```

## Code Templates

### JavaScript
````javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Solution {
    countWords(sentence) {
        // Trim leading and trailing spaces
        let trimmed = sentence.trim();
        
        // If empty string after trimming, return 0
        if (trimmed === "") return 0;
        
        // Split by spaces and filter out empty strings
        let words = trimmed.split(/\s+/);
        
        return words.length;
    }
}

let input = '';
rl.on('line', (line) => {
    input += line + '\n';
});

rl.on('close', () => {
    const lines = input.trim().split('\n');
    const t = parseInt(lines[0]);
    const solution = new Solution();
    
    for (let i = 1; i <= t; i++) {
        const sentence = lines[i];
        const result = solution.countWords(sentence);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def count_words(self, sentence):
        # Trim leading and trailing spaces
        trimmed = sentence.strip()
        
        # If empty string after trimming, return 0
        if not trimmed:
            return 0
        
        # Split by whitespace and count
        words = trimmed.split()
        
        return len(words)

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        sentence = lines[i]
        result = solution.count_words(sentence)
        print(result)

if __name__ == "__main__":
    main()
````

### C++
````cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int countWords(string sentence) {
        // Trim leading and trailing spaces
        size_t start = sentence.find_first_not_of(" ");
        if (start == string::npos) return 0;
        
        size_t end = sentence.find_last_not_of(" ");
        sentence = sentence.substr(start, end - start + 1);
        
        // Count words by counting spaces + 1
        int wordCount = 1;
        bool inWord = true;
        
        for (char c : sentence) {
            if (c == ' ') {
                if (inWord) {
                    wordCount++;
                    inWord = false;
                }
            } else {
                inWord = true;
            }
        }
        
        return wordCount;
    }
};

int main() {
    string input;
    string line;
    
    // Read all input
    while (getline(cin, line)) {
        input += line + "\n";
    }
    
    stringstream ss(input);
    int t;
    ss >> t;
    ss.ignore(); // Ignore the newline after t
    
    Solution solution;
    
    for (int i = 0; i < t; i++) {
        string sentence;
        getline(ss, sentence);
        int result = solution.countWords(sentence);
        cout << result << endl;
    }
    
    return 0;
}
````

# 13. Remove Duplicates from Sorted Array

    - **Difficulty:** Medium
    - **Topic Tags:** Array, Two Pointers, In-Place Algorithm
    - **Company Tags:** Apple, Meta, Adobe, Netflix
## Problem Description

Given a sorted array of integers, write a program to remove duplicates in-place such that each element appears only once and return the new length. You must do this by modifying the input array in-place with O(1) extra memory.

The relative order of the elements should be kept the same. You don't need to consider what you leave beyond the new length.

You need to implement a function that takes a sorted array as input and returns the length of the array after removing duplicates.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 0 ≤ n ≤ 3 × 10⁴ (size of array)
- -100 ≤ arr[i] ≤ 100 (array elements)
- Array is sorted in non-decreasing order

## Hints

1. Use two pointers approach - one for reading and one for writing
2. Since array is sorted, duplicates will be adjacent
3. Keep the first occurrence of each unique element
4. Move the write pointer only when you find a new unique element

## Examples

**Example 1:**
```
Input: arr = [1, 1, 2]
Output: 2
Explanation: After removing duplicates, array becomes [1, 2] with length 2
```

**Example 2:**
```
Input: arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
Output: 5
Explanation: After removing duplicates, array becomes [0, 1, 2, 3, 4] with length 5
```

## Test Cases

**Test Case 1:**
```
Input:
3
3
1 1 2
10
0 0 1 1 1 2 2 3 3 4
1
5

Output:
2
5
1
```

**Test Case 2:**
```
Input:
2
5
1 2 3 4 5
7
-3 -1 -1 0 0 0 1

Output:
5
4
```

**Test Case 3:**
```
Input:
4
4
1 1 1 1
6
-10 -5 0 5 10 15
8
1 2 2 3 3 3 4 4
0

Output:
1
6
4
0
```

## Code Templates

### JavaScript
````javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Solution {
    removeDuplicates(arr) {
        if (arr.length === 0) return 0;
        
        let writeIndex = 1;
        
        for (let readIndex = 1; readIndex < arr.length; readIndex++) {
            if (arr[readIndex] !== arr[readIndex - 1]) {
                arr[writeIndex] = arr[readIndex];
                writeIndex++;
            }
        }
        
        return writeIndex;
    }
}

let input = '';
rl.on('line', (line) => {
    input += line + '\n';
});

rl.on('close', () => {
    const lines = input.trim().split('\n');
    const t = parseInt(lines[0]);
    const solution = new Solution();
    
    let lineIndex = 1;
    for (let i = 0; i < t; i++) {
        const n = parseInt(lines[lineIndex]);
        lineIndex++;
        if (n === 0) {
            console.log(0);
        } else {
            const arr = lines[lineIndex].split(' ').map(Number);
            lineIndex++;
            const result = solution.removeDuplicates(arr);
            console.log(result);
        }
    }
});
````

### Python
````python
import sys

class Solution:
    def remove_duplicates(self, arr):
        if len(arr) == 0:
            return 0
        
        write_index = 1
        
        for read_index in range(1, len(arr)):
            if arr[read_index] != arr[read_index - 1]:
                arr[write_index] = arr[read_index]
                write_index += 1
        
        return write_index

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    line_index = 1
    for i in range(t):
        n = int(lines[line_index])
        line_index += 1
        if n == 0:
            print(0)
        else:
            arr = list(map(int, lines[line_index].split()))
            line_index += 1
            result = solution.remove_duplicates(arr)
            print(result)

if __name__ == "__main__":
    main()
````

### C++
````cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& arr) {
        if (arr.size() == 0) return 0;
        
        int writeIndex = 1;
        
        for (int readIndex = 1; readIndex < arr.size(); readIndex++) {
            if (arr[readIndex] != arr[readIndex - 1]) {
                arr[writeIndex] = arr[readIndex];
                writeIndex++;
            }
        }
        
        return writeIndex;
    }
};

int main() {
    string input;
    string line;
    
    // Read all input
    while (getline(cin, line)) {
        input += line + "\n";
    }
    
    stringstream ss(input);
    int t;
    ss >> t;
    
    Solution solution;
    
    for (int i = 0; i < t; i++) {
        int n;
        ss >> n;
        if (n == 0) {
            cout << 0 << endl;
        } else {
            vector<int> arr(n);
            for (int j = 0; j < n; j++) {
                ss >> arr[j];
            }
            int result = solution.removeDuplicates(arr);
            cout << result << endl;
        }
    }
    
    return 0;
}
````


# 14. Merge Two Sorted Arrays

    - **Difficulty:** Medium
    - **Topic Tags:** Array, Two Pointers, Merge Sort
    - **Company Tags:** Google, Microsoft, Amazon, Apple
## Problem Description

Given two sorted arrays, write a program to merge them into a single sorted array. The merged array should contain all elements from both arrays in non-decreasing order.

You need to implement a function that takes two sorted arrays as input and returns a new merged sorted array containing all elements from both input arrays.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 0 ≤ m, n ≤ 10⁴ (sizes of the two arrays)
- -10⁹ ≤ arr1[i], arr2[i] ≤ 10⁹ (array elements)
- Both input arrays are sorted in non-decreasing order

## Hints

1. Use two pointers approach - one for each array
2. Compare elements at current pointers and add smaller one to result
3. Move the pointer of the array from which element was taken
4. Don't forget to add remaining elements when one array is exhausted

## Examples

**Example 1:**
```
Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
Output: [1, 2, 3, 4, 5, 6]
Explanation: Merging two sorted arrays results in a sorted merged array
```

**Example 2:**
```
Input: arr1 = [1, 5, 9], arr2 = [2, 3, 6, 7]
Output: [1, 2, 3, 5, 6, 7, 9]
Explanation: All elements from both arrays are merged in sorted order
```

## Test Cases

**Test Case 1:**
```
Input:
3
3 3
1 3 5
2 4 6
3 4
1 5 9
2 3 6 7
1 1
10
20

Output:
1 2 3 4 5 6
1 2 3 5 6 7 9
10 20
```

**Test Case 2:**
```
Input:
2
2 3
1 100
2 3 4
0 2
5 10

Output:
1 2 3 4 100
5 10
```

**Test Case 3:**
```
Input:
4
4 0
1 2 3 4

0 3

7 8 9
5 2
-5 -1 0 2 10
-10 100
2 2
1 1
2 2

Output:
1 2 3 4
7 8 9
-10 -5 -1 0 2 10 100
1 1 2 2
```

## Code Templates

### JavaScript
````javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Solution {
    mergeSortedArrays(arr1, arr2) {
        let merged = [];
        let i = 0, j = 0;
        
        // Merge arrays using two pointers
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                merged.push(arr1[i]);
                i++;
            } else {
                merged.push(arr2[j]);
                j++;
            }
        }
        
        // Add remaining elements from arr1
        while (i < arr1.length) {
            merged.push(arr1[i]);
            i++;
        }
        
        // Add remaining elements from arr2
        while (j < arr2.length) {
            merged.push(arr2[j]);
            j++;
        }
        
        return merged;
    }
}

let input = '';
rl.on('line', (line) => {
    input += line + '\n';
});

rl.on('close', () => {
    const lines = input.trim().split('\n');
    const t = parseInt(lines[0]);
    const solution = new Solution();
    
    let lineIndex = 1;
    for (let i = 0; i < t; i++) {
        const [m, n] = lines[lineIndex].split(' ').map(Number);
        lineIndex++;
        
        let arr1 = [];
        let arr2 = [];
        
        if (m > 0) {
            arr1 = lines[lineIndex].split(' ').map(Number);
            lineIndex++;
        }
        
        if (n > 0) {
            arr2 = lines[lineIndex].split(' ').map(Number);
            lineIndex++;
        }
        
        const result = solution.mergeSortedArrays(arr1, arr2);
        console.log(result.join(' '));
    }
});
````

### Python
````python
import sys

class Solution:
    def merge_sorted_arrays(self, arr1, arr2):
        merged = []
        i, j = 0, 0
        
        # Merge arrays using two pointers
        while i < len(arr1) and j < len(arr2):
            if arr1[i] <= arr2[j]:
                merged.append(arr1[i])
                i += 1
            else:
                merged.append(arr2[j])
                j += 1
        
        # Add remaining elements from arr1
        while i < len(arr1):
            merged.append(arr1[i])
            i += 1
        
        # Add remaining elements from arr2
        while j < len(arr2):
            merged.append(arr2[j])
            j += 1
        
        return merged

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    line_index = 1
    for i in range(t):
        m, n = map(int, lines[line_index].split())
        line_index += 1
        
        arr1 = []
        arr2 = []
        
        if m > 0:
            arr1 = list(map(int, lines[line_index].split()))
            line_index += 1
        
        if n > 0:
            arr2 = list(map(int, lines[line_index].split()))
            line_index += 1
        
        result = solution.merge_sorted_arrays(arr1, arr2)
        print(' '.join(map(str, result)))

if __name__ == "__main__":
    main()
````

### C++
````cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> mergeSortedArrays(vector<int>& arr1, vector<int>& arr2) {
        vector<int> merged;
        int i = 0, j = 0;
        
        // Merge arrays using two pointers
        while (i < arr1.size() && j < arr2.size()) {
            if (arr1[i] <= arr2[j]) {
                merged.push_back(arr1[i]);
                i++;
            } else {
                merged.push_back(arr2[j]);
                j++;
            }
        }
        
        // Add remaining elements from arr1
        while (i < arr1.size()) {
            merged.push_back(arr1[i]);
            i++;
        }
        
        // Add remaining elements from arr2
        while (j < arr2.size()) {
            merged.push_back(arr2[j]);
            j++;
        }
        
        return merged;
    }
};

int main() {
    string input;
    string line;
    
    // Read all input
    while (getline(cin, line)) {
        input += line + "\n";
    }
    
    stringstream ss(input);
    int t;
    ss >> t;
    
    Solution solution;
    
    for (int i = 0; i < t; i++) {
        int m, n;
        ss >> m >> n;
        
        vector<int> arr1(m), arr2(n);
        
        for (int j = 0; j < m; j++) {
            ss >> arr1[j];
        }
        
        for (int j = 0; j < n; j++) {
            ss >> arr2[j];
        }
        
        vector<int> result = solution.mergeSortedArrays(arr1, arr2);
        
        for (int j = 0; j < result.size(); j++) {
            cout << result[j];
            if (j < result.size() - 1) cout << " ";
        }
        cout << endl;
    }
    
    return 0;
}
````

# 15. Find Second Largest Element

    - **Difficulty:** Medium
    - **Topic Tags:** Array, Sorting, Linear Search
    - **Company Tags:** Flipkart, Paytm, TCS, Infosys

## Problem Description

Given an array of integers, write a program to find the second largest element in the array. If there are duplicate values, consider them as the same element. If there's no second largest element (i.e., all elements are the same or array has only one element), return -1.

You need to implement a function that takes an array of integers as input and returns the second largest element, or -1 if it doesn't exist.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ n ≤ 10⁵ (size of array)
- -10⁹ ≤ arr[i] ≤ 10⁹ (array elements)

## Hints

1. Keep track of the largest and second largest elements in a single pass
2. Handle duplicates properly - don't update second largest if current element equals largest
3. Initialize second largest as a very small value or use a flag
4. Alternative: Sort the array and find the second unique largest element

## Examples

**Example 1:**
```
Input: arr = [3, 7, 1, 9, 2]
Output: 7
Explanation: The largest element is 9, and the second largest is 7
```

**Example 2:**
```
Input: arr = [5, 5, 5, 5]
Output: -1
Explanation: All elements are the same, so no second largest exists
```

## Test Cases

**Test Case 1:**
```
Input:
3
5
3 7 1 9 2
4
5 5 5 5
2
10 20

Output:
7
-1
10
```

**Test Case 2:**
```
Input:
2
6
1 2 3 4 5 6
1
42

Output:
5
-1
```

**Test Case 3:**
```
Input:
4
7
10 10 5 3 8 8 2
3
-1 -2 -3
5
100 200 100 200 150
4
1 1 2 2

Output:
8
-2
150
1
```

## Code Templates

### JavaScript
````javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Solution {
    findSecondLargest(arr) {
        if (arr.length < 2) return -1;
        
        let largest = -Infinity;
        let secondLargest = -Infinity;
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            } else if (arr[i] > secondLargest && arr[i] !== largest) {
                secondLargest = arr[i];
            }
        }
        
        return secondLargest === -Infinity ? -1 : secondLargest;
    }
}

let input = '';
rl.on('line', (line) => {
    input += line + '\n';
});

rl.on('close', () => {
    const lines = input.trim().split('\n');
    const t = parseInt(lines[0]);
    const solution = new Solution();
    
    let lineIndex = 1;
    for (let i = 0; i < t; i++) {
        const n = parseInt(lines[lineIndex]);
        lineIndex++;
        const arr = lines[lineIndex].split(' ').map(Number);
        lineIndex++;
        const result = solution.findSecondLargest(arr);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def find_second_largest(self, arr):
        if len(arr) < 2:
            return -1
        
        largest = float('-inf')
        second_largest = float('-inf')
        
        for num in arr:
            if num > largest:
                second_largest = largest
                largest = num
            elif num > second_largest and num != largest:
                second_largest = num
        
        return -1 if second_largest == float('-inf') else second_largest

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    line_index = 1
    for i in range(t):
        n = int(lines[line_index])
        line_index += 1
        arr = list(map(int, lines[line_index].split()))
        line_index += 1
        result = solution.find_second_largest(arr)
        print(result)

if __name__ == "__main__":
    main()
````

### C++
````cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int findSecondLargest(vector<int>& arr) {
        if (arr.size() < 2) return -1;
        
        long long largest = LLONG_MIN;
        long long secondLargest = LLONG_MIN;
        
        for (int num : arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }
        
        return secondLargest == LLONG_MIN ? -1 : (int)secondLargest;
    }
};

int main() {
    string input;
    string line;
    
    // Read all input
    while (getline(cin, line)) {
        input += line + "\n";
    }
    
    stringstream ss(input);
    int t;
    ss >> t;
    
    Solution solution;
    
    for (int i = 0; i < t; i++) {
        int n;
        ss >> n;
        vector<int> arr(n);
        for (int j = 0; j < n; j++) {
            ss >> arr[j];
        }
        int result = solution.findSecondLargest(arr);
        cout << result << endl;
    }
    
    return 0;
}
````