# 16. Check Anagram Strings

    - **Difficulty:** Medium
    - **Topic Tags:** String, Hash Table, Sorting, Character Frequency
    - **Company Tags:** Facebook, Google, Amazon, Microsoft

## Problem Description

Given two strings, write a program to check if they are anagrams of each other. Two strings are anagrams if they contain the same characters with the same frequency, but possibly in different order. Consider only alphabetic characters and ignore case sensitivity.

You need to implement a function that takes two strings as input and returns true if they are anagrams, false otherwise.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ length of strings ≤ 10⁵
- Strings contain only alphabetic characters (a-z, A-Z)
- Case insensitive comparison

## Hints

1. Convert both strings to lowercase for case-insensitive comparison
2. Check if lengths are equal first - anagrams must have same length
3. Count frequency of each character in both strings and compare
4. Alternative: Sort both strings and check if they are equal

## Examples

**Example 1:**
```
Input: s1 = "listen", s2 = "silent"
Output: true
Explanation: Both strings contain same characters with same frequency
```

**Example 2:**
```
Input: s1 = "hello", s2 = "world"
Output: false
Explanation: Different characters, so not anagrams
```

## Test Cases

**Test Case 1:**
```
Input:
3
listen
silent
hello
world
Anagram
Nagaram

Output:
true
false
true
```

**Test Case 2:**
```
Input:
2
race
care
cat
dog

Output:
true
false
```

**Test Case 3:**
```
Input:
4
Evil
Vile
A gentleman
Elegant man
abc
bca
programming
grammingpro

Output:
true
true
true
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
    isAnagram(s1, s2) {
        // Convert to lowercase and remove spaces
        s1 = s1.toLowerCase().replace(/\s/g, '');
        s2 = s2.toLowerCase().replace(/\s/g, '');
        
        // Check if lengths are equal
        if (s1.length !== s2.length) return false;
        
        // Count frequency of characters
        let charCount = {};
        
        // Count characters in first string
        for (let char of s1) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        
        // Subtract count for characters in second string
        for (let char of s2) {
            if (!charCount[char]) return false;
            charCount[char]--;
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
    
    let lineIndex = 1;
    for (let i = 0; i < t; i++) {
        const s1 = lines[lineIndex];
        lineIndex++;
        const s2 = lines[lineIndex];
        lineIndex++;
        const result = solution.isAnagram(s1, s2);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def is_anagram(self, s1, s2):
        # Convert to lowercase and remove spaces
        s1 = s1.lower().replace(' ', '')
        s2 = s2.lower().replace(' ', '')
        
        # Check if lengths are equal
        if len(s1) != len(s2):
            return False
        
        # Count frequency of characters
        char_count = {}
        
        # Count characters in first string
        for char in s1:
            char_count[char] = char_count.get(char, 0) + 1
        
        # Subtract count for characters in second string
        for char in s2:
            if char not in char_count:
                return False
            char_count[char] -= 1
            if char_count[char] < 0:
                return False
        
        return True

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    line_index = 1
    for i in range(t):
        s1 = lines[line_index]
        line_index += 1
        s2 = lines[line_index]
        line_index += 1
        result = solution.is_anagram(s1, s2)
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
    bool isAnagram(string s1, string s2) {
        // Convert to lowercase and remove spaces
        transform(s1.begin(), s1.end(), s1.begin(), ::tolower);
        transform(s2.begin(), s2.end(), s2.begin(), ::tolower);
        
        s1.erase(remove(s1.begin(), s1.end(), ' '), s1.end());
        s2.erase(remove(s2.begin(), s2.end(), ' '), s2.end());
        
        // Check if lengths are equal
        if (s1.length() != s2.length()) return false;
        
        // Count frequency of characters
        unordered_map<char, int> charCount;
        
        // Count characters in first string
        for (char c : s1) {
            charCount[c]++;
        }
        
        // Subtract count for characters in second string
        for (char c : s2) {
            if (charCount[c] == 0) return false;
            charCount[c]--;
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
        string s1, s2;
        getline(ss, s1);
        getline(ss, s2);
        bool result = solution.isAnagram(s1, s2);
        cout << (result ? "true" : "false") << endl;
    }
    
    return 0;
}
````

# 17.  Find GCD of Two Numbers

    - **Difficulty:** Medium
    - **Topic Tags:** Math, Number Theory, Euclidean Algorithm
    - **Company Tags:** Adobe, Wipro, Accenture, HCL

## Problem Description

Given two positive integers, write a program to find their Greatest Common Divisor (GCD). The GCD of two numbers is the largest positive integer that divides both numbers without leaving a remainder.

For example, GCD of 12 and 18 is 6, because 6 is the largest number that divides both 12 and 18.

You need to implement a function that takes two integers as input and returns their GCD.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ a, b ≤ 10⁹ (input numbers)

## Hints

1. Use Euclidean algorithm: GCD(a, b) = GCD(b, a % b) when b ≠ 0
2. Base case: GCD(a, 0) = a
3. The algorithm is recursive and very efficient
4. Alternative: Use built-in GCD functions after understanding the logic

## Examples

**Example 1:**
```
Input: a = 12, b = 18
Output: 6
Explanation: Divisors of 12: 1, 2, 3, 4, 6, 12. Divisors of 18: 1, 2, 3, 6, 9, 18. GCD = 6
```

**Example 2:**
```
Input: a = 17, b = 13
Output: 1
Explanation: Both are prime numbers, so GCD is 1
```

## Test Cases

**Test Case 1:**
```
Input:
3
12 18
17 13
48 18

Output:
6
1
6
```

**Test Case 2:**
```
Input:
2
100 25
7 14

Output:
25
7
```

**Test Case 3:**
```
Input:
4
1 1
15 25
56 98
1000000000 999999999

Output:
1
5
14
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
    findGCD(a, b) {
        // Euclidean algorithm
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
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
        const [a, b] = lines[i].split(' ').map(Number);
        const result = solution.findGCD(a, b);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def find_gcd(self, a, b):
        # Euclidean algorithm
        while b != 0:
            temp = b
            b = a % b
            a = temp
        return a

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        a, b = map(int, lines[i].split())
        result = solution.find_gcd(a, b)
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
    int findGCD(int a, int b) {
        // Euclidean algorithm
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
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
        int a, b;
        ss >> a >> b;
        int result = solution.findGCD(a, b);
        cout << result << endl;
    }
    
    return 0;
}
````



# 18. Check Armstrong Number

    - **Difficulty:** Medium
    - **Topic Tags:** Math, Number Theory, Power Calculation
    - **Company Tags:** Cognizant, Capgemini, Tech Mahindra, L&T Infotech

## Problem Description

Given a positive integer, write a program to check if it is an Armstrong number. An Armstrong number (also known as narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

For example:
- 153 is an Armstrong number because 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
- 9474 is an Armstrong number because 9474 = 9⁴ + 4⁴ + 7⁴ + 4⁴ = 6561 + 256 + 2401 + 256 = 9474

You need to implement a function that takes an integer as input and returns true if it's an Armstrong number, false otherwise.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ n ≤ 10⁹ (input number)

## Hints

1. First count the number of digits in the given number
2. Extract each digit and raise it to the power of total digit count
3. Sum all the powered digits and compare with original number
4. Use modulo operator to extract digits and integer division to remove them

## Examples

**Example 1:**
```
Input: n = 153
Output: true
Explanation: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
```

**Example 2:**
```
Input: n = 123
Output: false
Explanation: 123 ≠ 1³ + 2³ + 3³ = 1 + 8 + 27 = 36
```

## Test Cases

**Test Case 1:**
```
Input:
3
153
123
9474

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
371

Output:
true
true
```

**Test Case 3:**
```
Input:
4
407
1634
8208
54748

Output:
true
true
true
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
    isArmstrong(n) {
        let original = n;
        let digitCount = 0;
        let temp = n;
        
        // Count number of digits
        while (temp > 0) {
            digitCount++;
            temp = Math.floor(temp / 10);
        }
        
        let sum = 0;
        temp = n;
        
        // Calculate sum of digits raised to power of digit count
        while (temp > 0) {
            let digit = temp % 10;
            sum += Math.pow(digit, digitCount);
            temp = Math.floor(temp / 10);
        }
        
        return sum === original;
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
        const result = solution.isArmstrong(n);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def is_armstrong(self, n):
        original = n
        digit_count = 0
        temp = n
        
        # Count number of digits
        while temp > 0:
            digit_count += 1
            temp //= 10
        
        sum_val = 0
        temp = n
        
        # Calculate sum of digits raised to power of digit count
        while temp > 0:
            digit = temp % 10
            sum_val += digit ** digit_count
            temp //= 10
        
        return sum_val == original

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        n = int(lines[i])
        result = solution.is_armstrong(n)
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
    bool isArmstrong(int n) {
        int original = n;
        int digitCount = 0;
        int temp = n;
        
        // Count number of digits
        while (temp > 0) {
            digitCount++;
            temp /= 10;
        }
        
        long long sum = 0;
        temp = n;
        
        // Calculate sum of digits raised to power of digit count
        while (temp > 0) {
            int digit = temp % 10;
            sum += pow(digit, digitCount);
            temp /= 10;
        }
        
        return sum == original;
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
        bool result = solution.isArmstrong(n);
        cout << (result ? "true" : "false") << endl;
    }
    
    return 0;
}
````
# 19. Convert Decimal to Binary
   - **Difficulty:** Easy
   - **Topic Tags:** Math, Number System, Bit Manipulation
   - **Company Tags:** Intel, Nvidia, Qualcomm, Samsung

## Problem Description

Given a positive integer in decimal format, write a program to convert it to its binary representation. Binary is a base-2 number system that uses only digits 0 and 1.

The conversion is done by repeatedly dividing the number by 2 and collecting the remainders in reverse order.

You need to implement a function that takes a decimal integer as input and returns its binary representation as a string.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 0 ≤ n ≤ 10⁹ (input decimal number)

## Hints

1. Use modulo operator (%) to get remainder when divided by 2
2. Use integer division (/) to get quotient for next iteration
3. Collect remainders and reverse them to get binary representation
4. Handle the special case of 0 separately

## Examples

**Example 1:**
```
Input: n = 10
Output: 1010
Explanation: 10 = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10
```

**Example 2:**
```
Input: n = 0
Output: 0
Explanation: Binary representation of 0 is 0
```

## Test Cases

**Test Case 1:**
```
Input:
3
10
0
7

Output:
1010
0
111
```

**Test Case 2:**
```
Input:
2
15
255

Output:
1111
11111111
```

**Test Case 3:**
```
Input:
4
1
8
16
1024

Output:
1
1000
10000
10000000000
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
    decimalToBinary(n) {
        if (n === 0) return "0";
        
        let binary = "";
        
        while (n > 0) {
            binary = (n % 2) + binary;
            n = Math.floor(n / 2);
        }
        
        return binary;
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
        const result = solution.decimalToBinary(n);
        console.log(result);
    }
});
````

### Python
````python
# filepath: solution.py
import sys

class Solution:
    def decimal_to_binary(self, n):
        if n == 0:
            return "0"
        
        binary = ""
        
        while n > 0:
            binary = str(n % 2) + binary
            n //= 2
        
        return binary

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        n = int(lines[i])
        result = solution.decimal_to_binary(n)
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
    string decimalToBinary(int n) {
        if (n == 0) return "0";
        
        string binary = "";
        
        while (n > 0) {
            binary = to_string(n % 2) + binary;
            n /= 2;
        }
        
        return binary;
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
        string result = solution.decimalToBinary(n);
        cout << result << endl;
    }
    
    return 0;
}
````
# 20. Check Balanced Parentheses

    - **Difficulty:** Hard
    - **Topic Tags:** Stack, String, Data Structures, Pattern Matching
    - **Company Tags:** Google, Microsoft, Facebook, Amazon

## Problem Description

Given a string containing only parentheses characters '(', ')', '[', ']', '{', '}', write a program to determine if the parentheses are balanced. A string is considered balanced if:
- Every opening bracket has a corresponding closing bracket
- The brackets are properly nested
- The brackets are closed in the correct order

You need to implement a function that takes a string as input and returns true if the parentheses are balanced, false otherwise.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ length of string ≤ 10⁴
- String contains only parentheses characters: '(', ')', '[', ']', '{', '}'

## Hints

1. Use a stack data structure to keep track of opening brackets
2. For each opening bracket, push it onto the stack
3. For each closing bracket, check if it matches the top of the stack
4. At the end, the stack should be empty for balanced parentheses

## Examples

**Example 1:**
```
Input: s = "()"
Output: true
Explanation: The parentheses are properly balanced
```

**Example 2:**
```
Input: s = "({[]})"
Output: true
Explanation: All brackets are properly nested and balanced
```

## Test Cases

**Test Case 1:**
```
Input:
3
()
({[]})
([)]

Output:
true
true
false
```

**Test Case 2:**
```
Input:
2
((()))
([{}])

Output:
true
true
```

**Test Case 3:**
```
Input:
4
{[()]}
((()
)))(((
{}[]()

Output:
true
false
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
    isBalanced(s) {
        const stack = [];
        const pairs = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        
        for (let char of s) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else if (char === ')' || char === ']' || char === '}') {
                if (stack.length === 0 || stack.pop() !== pairs[char]) {
                    return false;
                }
            }
        }
        
        return stack.length === 0;
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
        const result = solution.isBalanced(s);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def is_balanced(self, s):
        stack = []
        pairs = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        
        for char in s:
            if char in '([{':
                stack.append(char)
            elif char in ')]}':
                if not stack or stack.pop() != pairs[char]:
                    return False
        
        return len(stack) == 0

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        s = lines[i]
        result = solution.is_balanced(s)
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
    bool isBalanced(string s) {
        stack<char> st;
        unordered_map<char, char> pairs = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };
        
        for (char c : s) {
            if (c == '(' || c == '[' || c == '{') {
                st.push(c);
            } else if (c == ')' || c == ']' || c == '}') {
                if (st.empty() || st.top() != pairs[c]) {
                    return false;
                }
                st.pop();
            }
        }
        
        return st.empty();
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
        bool result = solution.isBalanced(s);
        cout << (result ? "true" : "false") << endl;
    }
    
    return 0;
}
````

# 21. Print Nth Prime Number

    - **Difficulty:** Hard
    - **Topic Tags:** Math, Number Theory, Prime Numbers, Sieve of Eratosthenes
    - **Company Tags:** Oracle, IBM, Zoho, Infosys

## Problem Description

Given a positive integer n, write a program to find and return the nth prime number. Prime numbers are natural numbers greater than 1 that have no positive divisors other than 1 and themselves.

The sequence of prime numbers starts as: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47...

For example, the 1st prime is 2, the 5th prime is 11, and the 10th prime is 29.

You need to implement a function that takes an integer n as input and returns the nth prime number.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ n ≤ 10⁴ (to find reasonable nth prime)

## Hints

1. Use Sieve of Eratosthenes to generate all primes up to a reasonable limit
2. Alternative: Check each number for primality and count until you reach n
3. Start checking from 2 and maintain a counter for found primes
4. For efficiency, precompute primes if multiple test cases are expected

## Examples

**Example 1:**
```
Input: n = 5
Output: 11
Explanation: The first 5 primes are 2, 3, 5, 7, 11. So 5th prime is 11
```

**Example 2:**
```
Input: n = 1
Output: 2
Explanation: The first prime number is 2
```

## Test Cases

**Test Case 1:**
```
Input:
3
5
1
10

Output:
11
2
29
```

**Test Case 2:**
```
Input:
2
3
7

Output:
5
17
```

**Test Case 3:**
```
Input:
4
100
200
500
1000

Output:
541
1223
3571
7919
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
    isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false;
            }
        }
        return true;
    }
    
    nthPrime(n) {
        if (n === 1) return 2;
        
        let count = 1; // Starting with 2 as first prime
        let num = 3;
        
        while (count < n) {
            if (this.isPrime(num)) {
                count++;
            }
            if (count < n) {
                num += 2; // Only check odd numbers after 2
            }
        }
        
        return num;
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
        const result = solution.nthPrime(n);
        console.log(result);
    }
});
````

### Python
````python
# filepath: solution.py
import sys

class Solution:
    def is_prime(self, num):
        if num <= 1:
            return False
        if num <= 3:
            return True
        if num % 2 == 0 or num % 3 == 0:
            return False
        
        i = 5
        while i * i <= num:
            if num % i == 0 or num % (i + 2) == 0:
                return False
            i += 6
        return True
    
    def nth_prime(self, n):
        if n == 1:
            return 2
        
        count = 1  # Starting with 2 as first prime
        num = 3
        
        while count < n:
            if self.is_prime(num):
                count += 1
            if count < n:
                num += 2  # Only check odd numbers after 2
        
        return num

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        n = int(lines[i])
        result = solution.nth_prime(n)
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
    bool isPrime(int num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 == 0 || num % 3 == 0) return false;
        
        for (int i = 5; i * i <= num; i += 6) {
            if (num % i == 0 || num % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }
    
    int nthPrime(int n) {
        if (n == 1) return 2;
        
        int count = 1; // Starting with 2 as first prime
        int num = 3;
        
        while (count < n) {
            if (isPrime(num)) {
                count++;
            }
            if (count < n) {
                num += 2; // Only check odd numbers after 2
            }
        }
        
        return num;
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
        int result = solution.nthPrime(n);
        cout << result << endl;
    }
    
    return 0;
}
````

# 22. Find Intersection of Two Arrays

    - **Difficulty:** Hard
    - **Topic Tags:** Array, Hash Set, Two Pointers, Sorting
    - **Company Tags:** Apple, Facebook, LinkedIn, Adobe

## Problem Description

Given two arrays of integers, write a program to find their intersection. The intersection should contain unique elements that are present in both arrays. The result can be in any order, but each element should appear only once in the output.

You need to implement a function that takes two arrays as input and returns an array containing the intersection of the two arrays.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 0 ≤ m, n ≤ 10⁴ (sizes of the two arrays)
- -10⁹ ≤ arr1[i], arr2[i] ≤ 10⁹ (array elements)

## Hints

1. Use a hash set to store elements from the first array
2. Iterate through the second array and check if elements exist in the hash set
3. Use another set to avoid duplicate elements in the result
4. Alternative: Sort both arrays and use two pointers approach

## Examples

**Example 1:**
```
Input: arr1 = [1, 2, 2, 1], arr2 = [2, 2]
Output: [2]
Explanation: The intersection contains only 2, appearing once
```

**Example 2:**
```
Input: arr1 = [4, 9, 5], arr2 = [9, 4, 9, 8, 4]
Output: [4, 9]
Explanation: The intersection contains 4 and 9
```

## Test Cases

**Test Case 1:**
```
Input:
3
4 2
1 2 2 1
2 2
3 5
4 9 5
9 4 9 8 4
2 3
1 2
3 4 5

Output:
2
4 9
```

**Test Case 2:**
```
Input:
2
3 3
1 2 3
4 5 6
5 4
10 20 30 40 50
30 40 50 60

Output:

30 40 50
```

**Test Case 3:**
```
Input:
4
0 2

5 10
3 3
1 1 1
1 2 3
4 4
-1 0 1 2
-1 1 3 4
2 2
100 200
100 200

Output:

1
-1 1
100 200
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
    findIntersection(arr1, arr2) {
        const set1 = new Set(arr1);
        const resultSet = new Set();
        
        for (let num of arr2) {
            if (set1.has(num)) {
                resultSet.add(num);
            }
        }
        
        return Array.from(resultSet);
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
        
        const result = solution.findIntersection(arr1, arr2);
        if (result.length === 0) {
            console.log('');
        } else {
            console.log(result.join(' '));
        }
    }
});
````

### Python
````python
import sys

class Solution:
    def find_intersection(self, arr1, arr2):
        set1 = set(arr1)
        result_set = set()
        
        for num in arr2:
            if num in set1:
                result_set.add(num)
        
        return list(result_set)

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
        
        result = solution.find_intersection(arr1, arr2)
        if len(result) == 0:
            print('')
        else:
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
    vector<int> findIntersection(vector<int>& arr1, vector<int>& arr2) {
        unordered_set<int> set1(arr1.begin(), arr1.end());
        unordered_set<int> resultSet;
        
        for (int num : arr2) {
            if (set1.find(num) != set1.end()) {
                resultSet.insert(num);
            }
        }
        
        return vector<int>(resultSet.begin(), resultSet.end());
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
        
        vector<int> result = solution.findIntersection(arr1, arr2);
        
        if (result.empty()) {
            cout << endl;
        } else {
            for (int j = 0; j < result.size(); j++) {
                cout << result[j];
                if (j < result.size() - 1) cout << " ";
            }
            cout << endl;
        }
    }
    
    return 0;
}
````

# 23. Find Length of Linked List

    - **Difficulty:** Hard
    - **Topic Tags:** Linked List, Traversal, Data Structures, Pointers
    - **Company Tags:** Microsoft, Amazon, Google, Meta

## Problem Description

Given the head of a singly linked list, write a program to find and return the length (number of nodes) of the linked list. You need to traverse the entire linked list and count all the nodes.

A singly linked list is a data structure where each node contains data and a pointer/reference to the next node. The last node points to null.

You need to implement a function that takes the head of a linked list as input and returns the total number of nodes in the list.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 0 ≤ n ≤ 10⁴ (number of nodes in linked list)
- -10⁹ ≤ node.data ≤ 10⁹ (node values)

## Hints

1. Start from the head node and traverse the linked list
2. Keep a counter and increment it for each node visited
3. Continue until you reach a null pointer (end of list)
4. Handle the edge case where the linked list is empty (head is null)

## Examples

**Example 1:**
```
Input: LinkedList = [1, 2, 3, 4, 5]
Output: 5
Explanation: The linked list has 5 nodes
```

**Example 2:**
```
Input: LinkedList = []
Output: 0
Explanation: Empty linked list has 0 nodes
```

## Test Cases

**Test Case 1:**
```
Input:
3
5
1 2 3 4 5
0

3
10 20 30

Output:
5
0
3
```

**Test Case 2:**
```
Input:
2
1
42
7
1 2 3 4 5 6 7

Output:
1
7
```

**Test Case 3:**
```
Input:
4
10
1 2 3 4 5 6 7 8 9 10
2
-5 10
0

6
100 200 300 400 500 600

Output:
10
2
0
6
```

## Code Templates

### JavaScript
````javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    findLength(head) {
        let count = 0;
        let current = head;
        
        while (current !== null) {
            count++;
            current = current.next;
        }
        
        return count;
    }
}

function createLinkedList(arr) {
    if (arr.length === 0) return null;
    
    let head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
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
        
        let head = null;
        if (n > 0) {
            const arr = lines[lineIndex].split(' ').map(Number);
            lineIndex++;
            head = createLinkedList(arr);
        }
        
        const result = solution.findLength(head);
        console.log(result);
    }
});
````

### Python
````python
import sys

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def find_length(self, head):
        count = 0
        current = head
        
        while current is not None:
            count += 1
            current = current.next
        
        return count

def create_linked_list(arr):
    if len(arr) == 0:
        return None
    
    head = ListNode(arr[0])
    current = head
    
    for i in range(1, len(arr)):
        current.next = ListNode(arr[i])
        current = current.next
    
    return head

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    line_index = 1
    for i in range(t):
        n = int(lines[line_index])
        line_index += 1
        
        head = None
        if n > 0:
            arr = list(map(int, lines[line_index].split()))
            line_index += 1
            head = create_linked_list(arr)
        
        result = solution.find_length(head)
        print(result)

if __name__ == "__main__":
    main()
````

### C++
````cpp
#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    int findLength(ListNode* head) {
        int count = 0;
        ListNode* current = head;
        
        while (current != nullptr) {
            count++;
            current = current->next;
        }
        
        return count;
    }
};

ListNode* createLinkedList(vector<int>& arr) {
    if (arr.empty()) return nullptr;
    
    ListNode* head = new ListNode(arr[0]);
    ListNode* current = head;
    
    for (int i = 1; i < arr.size(); i++) {
        current->next = new ListNode(arr[i]);
        current = current->next;
    }
    
    return head;
}

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
        
        ListNode* head = nullptr;
        if (n > 0) {
            vector<int> arr(n);
            for (int j = 0; j < n; j++) {
                ss >> arr[j];
            }
            head = createLinkedList(arr);
        }
        
        int result = solution.findLength(head);
        cout << result << endl;
    }
    
    return 0;
}
````

# 24. Find Power of a Number

   - **Difficulty:** Easy
   - **Topic Tags:** Math, Recursion, Exponentiation
   - **Company Tags:** Intel, Nvidia, Samsung, Qualcomm

## Problem Description

Given two integers base and exponent, write a program to calculate base raised to the power of exponent (base^exponent). You need to compute the result of mathematical exponentiation.

For example, 2^3 = 2 × 2 × 2 = 8, and 5^0 = 1 (any number raised to power 0 is 1).

You need to implement a function that takes two integers as input and returns the result of base raised to the power of exponent.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- -100 ≤ base ≤ 100
- 0 ≤ exponent ≤ 20 (to avoid overflow issues)
- Result will fit in a 64-bit signed integer

## Hints

1. Handle the base case: any number raised to power 0 equals 1
2. Use iterative approach: multiply base by itself exponent times
3. For efficiency, consider binary exponentiation for larger exponents
4. Handle negative base properly with even/odd exponents

## Examples

**Example 1:**
```
Input: base = 2, exponent = 3
Output: 8
Explanation: 2^3 = 2 × 2 × 2 = 8
```

**Example 2:**
```
Input: base = 5, exponent = 0
Output: 1
Explanation: Any number raised to power 0 is 1
```

## Test Cases

**Test Case 1:**
```
Input:
3
2 3
5 0
-2 4

Output:
8
1
16
```

**Test Case 2:**
```
Input:
2
3 2
-3 3

Output:
9
-27
```

**Test Case 3:**
```
Input:
4
10 2
1 10
0 5
-1 7

Output:
100
1
0
-1
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
    power(base, exponent) {
        if (exponent === 0) return 1;
        
        let result = 1;
        let absExponent = Math.abs(exponent);
        
        for (let i = 0; i < absExponent; i++) {
            result *= base;
        }
        
        return exponent < 0 ? 1 / result : result;
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
        const [base, exponent] = lines[i].split(' ').map(Number);
        const result = solution.power(base, exponent);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def power(self, base, exponent):
        if exponent == 0:
            return 1
        
        result = 1
        abs_exponent = abs(exponent)
        
        for i in range(abs_exponent):
            result *= base
        
        return 1 / result if exponent < 0 else result

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        base, exponent = map(int, lines[i].split())
        result = solution.power(base, exponent)
        print(int(result))

if __name__ == "__main__":
    main()
````

### C++
````cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    long long power(int base, int exponent) {
        if (exponent == 0) return 1;
        
        long long result = 1;
        int absExponent = abs(exponent);
        
        for (int i = 0; i < absExponent; i++) {
            result *= base;
        }
        
        return exponent < 0 ? 1 / result : result;
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
        int base, exponent;
        ss >> base >> exponent;
        long long result = solution.power(base, exponent);
        cout << result << endl;
    }
    
    return 0;
}
````

# 25. Sum of Elements in Matrix
   - **Difficulty:** Easy
   - **Topic Tags:** Matrix, 2D Array, Iteration, Math
   - **Company Tags:** TCS, Infosys, Wipro, Cognizant

## Problem Description

Given a 2D matrix of integers, write a program to find the sum of all elements in the matrix. You need to iterate through all rows and columns of the matrix and calculate the total sum of all elements.

You need to implement a function that takes a 2D matrix as input and returns the sum of all its elements.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ m, n ≤ 100 (dimensions of matrix)
- -10³ ≤ matrix[i][j] ≤ 10³ (matrix elements)

## Hints

1. Use nested loops to iterate through all rows and columns
2. Keep a running sum and add each element to it
3. Handle negative numbers properly in the sum
4. Alternative: Use built-in sum functions after flattening the matrix

## Examples

**Example 1:**
```
Input: matrix = [[1, 2, 3], [4, 5, 6]]
Output: 21
Explanation: 1 + 2 + 3 + 4 + 5 + 6 = 21
```

**Example 2:**
```
Input: matrix = [[1, -1], [2, -2]]
Output: 0
Explanation: 1 + (-1) + 2 + (-2) = 0
```

## Test Cases

**Test Case 1:**
```
Input:
3
2 3
1 2 3
4 5 6
2 2
1 -1
2 -2
1 1
5

Output:
21
0
5
```

**Test Case 2:**
```
Input:
2
3 2
10 20
30 40
50 60
2 4
1 2 3 4
5 6 7 8

Output:
210
36
```

**Test Case 3:**
```
Input:
4
1 3
-5 -10 -15
3 3
1 2 3
4 5 6
7 8 9
2 2
0 0
0 0
4 1
100
200
300
400

Output:
-30
45
0
1000
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
    sumMatrix(matrix) {
        let sum = 0;
        
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                sum += matrix[i][j];
            }
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
    
    let lineIndex = 1;
    for (let i = 0; i < t; i++) {
        const [m, n] = lines[lineIndex].split(' ').map(Number);
        lineIndex++;
        
        let matrix = [];
        for (let row = 0; row < m; row++) {
            const rowElements = lines[lineIndex].split(' ').map(Number);
            matrix.push(rowElements);
            lineIndex++;
        }
        
        const result = solution.sumMatrix(matrix);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def sum_matrix(self, matrix):
        total_sum = 0
        
        for row in matrix:
            for element in row:
                total_sum += element
        
        return total_sum

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    line_index = 1
    for i in range(t):
        m, n = map(int, lines[line_index].split())
        line_index += 1
        
        matrix = []
        for row in range(m):
            row_elements = list(map(int, lines[line_index].split()))
            matrix.append(row_elements)
            line_index += 1
        
        result = solution.sum_matrix(matrix)
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
    long long sumMatrix(vector<vector<int>>& matrix) {
        long long sum = 0;
        
        for (int i = 0; i < matrix.size(); i++) {
            for (int j = 0; j < matrix[i].size(); j++) {
                sum += matrix[i][j];
            }
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
        int m, n;
        ss >> m >> n;
        
        vector<vector<int>> matrix(m, vector<int>(n));
        for (int row = 0; row < m; row++) {
            for (int col = 0; col < n; col++) {
                ss >> matrix[row][col];
            }
        }
        
        long long result = solution.sumMatrix(matrix);
        cout << result << endl;
    }
    
    return 0;
}
````


# 26. Find Missing Number in Array

    - **Difficulty:** Medium
    - **Topic Tags:** Array, Math, Bit Manipulation, Hash Set
    - **Company Tags:** Microsoft, Amazon, Apple, Google

## Problem Description

Given an array containing n distinct numbers taken from the range [0, n], write a program to find the one missing number. The array will have exactly one number missing from the complete sequence.

For example, if the array contains numbers from 0 to n, but one number is missing, you need to find that missing number.

You need to implement a function that takes an array as input and returns the missing number from the sequence.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ n ≤ 10⁴ (size of complete sequence)
- Array contains n-1 distinct numbers from range [0, n]
- Exactly one number is missing

## Hints

1. Use sum formula: sum of 0 to n = n*(n+1)/2, subtract actual sum
2. Alternative: Use XOR properties - XOR all numbers 0 to n with array elements
3. Sort the array and find the gap in sequence
4. Use hash set to mark present numbers and find the missing one

## Examples

**Example 1:**
```
Input: nums = [3, 0, 1], n = 3
Output: 2
Explanation: The array should contain [0, 1, 2, 3], missing number is 2
```

**Example 2:**
```
Input: nums = [0, 1], n = 2
Output: 2
Explanation: The array should contain [0, 1, 2], missing number is 2
```

## Test Cases

**Test Case 1:**
```
Input:
3
3 3
3 0 1
2 2
0 1
4 4
9 6 4 2

Output:
2
2
0
```

**Test Case 2:**
```
Input:
2
5 5
1 2 3 4 5
1 1
1

Output:
0
0
```

**Test Case 3:**
```
Input:
4
6 6
0 1 2 3 4 6
3 3
1 2 3
7 7
0 1 2 3 4 5 7
1 1
0

Output:
5
0
6
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
    findMissingNumber(nums, n) {
        // Calculate expected sum of numbers from 0 to n
        let expectedSum = (n * (n + 1)) / 2;
        
        // Calculate actual sum of array elements
        let actualSum = 0;
        for (let num of nums) {
            actualSum += num;
        }
        
        // Missing number is the difference
        return expectedSum - actualSum;
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
        const [arrSize, n] = lines[lineIndex].split(' ').map(Number);
        lineIndex++;
        const nums = lines[lineIndex].split(' ').map(Number);
        lineIndex++;
        
        const result = solution.findMissingNumber(nums, n);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def find_missing_number(self, nums, n):
        # Calculate expected sum of numbers from 0 to n
        expected_sum = n * (n + 1) // 2
        
        # Calculate actual sum of array elements
        actual_sum = sum(nums)
        
        # Missing number is the difference
        return expected_sum - actual_sum

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    line_index = 1
    for i in range(t):
        arr_size, n = map(int, lines[line_index].split())
        line_index += 1
        nums = list(map(int, lines[line_index].split()))
        line_index += 1
        
        result = solution.find_missing_number(nums, n)
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
    int findMissingNumber(vector<int>& nums, int n) {
        // Calculate expected sum of numbers from 0 to n
        long long expectedSum = (long long)n * (n + 1) / 2;
        
        // Calculate actual sum of array elements
        long long actualSum = 0;
        for (int num : nums) {
            actualSum += num;
        }
        
        // Missing number is the difference
        return (int)(expectedSum - actualSum);
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
        int arrSize, n;
        ss >> arrSize >> n;
        
        vector<int> nums(arrSize);
        for (int j = 0; j < arrSize; j++) {
            ss >> nums[j];
        }
        
        int result = solution.findMissingNumber(nums, n);
        cout << result << endl;
    }
    
    return 0;
}
````

# 27. Check if Array is Sorted

    - **Difficulty:** Medium
    - **Topic Tags:** Array, Linear Search, Sorting Verification
    - **Company Tags:** Adobe, Infosys, TCS, HCL

## Problem Description

Given an array of integers, write a program to check if the array is sorted in non-decreasing order. An array is considered sorted if each element is less than or equal to the next element (arr[i] ≤ arr[i+1] for all valid i).

You need to implement a function that takes an array as input and returns true if the array is sorted in non-decreasing order, false otherwise.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ n ≤ 10⁵ (size of array)
- -10⁹ ≤ arr[i] ≤ 10⁹ (array elements)

## Hints

1. Iterate through the array and compare each element with the next one
2. If any element is greater than the next element, return false
3. If you complete the iteration without finding violations, return true
4. Handle edge case of single element array (always sorted)

## Examples

**Example 1:**
```
Input: arr = [1, 2, 3, 4, 5]
Output: true
Explanation: Each element is ≤ the next element, so array is sorted
```

**Example 2:**
```
Input: arr = [1, 3, 2, 4]
Output: false
Explanation: 3 > 2, so array is not sorted
```

## Test Cases

**Test Case 1:**
```
Input:
3
5
1 2 3 4 5
4
1 3 2 4
1
42

Output:
true
false
true
```

**Test Case 2:**
```
Input:
2
6
1 1 2 2 3 3
4
5 4 3 2

Output:
true
false
```

**Test Case 3:**
```
Input:
4
3
-3 -1 0
5
10 10 10 10 10
7
1 2 2 3 4 4 5
4
1 2 1 3

Output:
true
true
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
    isSorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
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
    
    let lineIndex = 1;
    for (let i = 0; i < t; i++) {
        const n = parseInt(lines[lineIndex]);
        lineIndex++;
        const arr = lines[lineIndex].split(' ').map(Number);
        lineIndex++;
        const result = solution.isSorted(arr);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def is_sorted(self, arr):
        for i in range(len(arr) - 1):
            if arr[i] > arr[i + 1]:
                return False
        return True

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
        result = solution.is_sorted(arr)
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
    bool isSorted(vector<int>& arr) {
        for (int i = 0; i < arr.size() - 1; i++) {
            if (arr[i] > arr[i + 1]) {
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
        vector<int> arr(n);
        for (int j = 0; j < n; j++) {
            ss >> arr[j];
        }
        bool result = solution.isSorted(arr);
        cout << (result ? "true" : "false") << endl;
    }
    
    return 0;
}
````

# 28. Find Frequency of Characters

    - **Difficulty:** Medium
    - **Topic Tags:** String, Hash Map, Character Counting, Frequency Analysis
    - **Company Tags:** Google, Microsoft, Amazon, Facebook

## Problem Description

Given a string, write a program to find the frequency of each character in the string. You need to count how many times each character appears and display the result. The output should show each unique character along with its frequency count.

You need to implement a function that takes a string as input and returns the frequency count of each character in the string.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ length of string ≤ 10⁵
- String contains only printable ASCII characters
- Case sensitive (treat 'A' and 'a' as different characters)

## Hints

1. Use a hash map or dictionary to store character frequencies
2. Iterate through the string and increment count for each character
3. Display results in order of first appearance or alphabetical order
4. Handle spaces and special characters if present in the string

## Examples

**Example 1:**
```
Input: s = "hello"
Output: h:1 e:1 l:2 o:1
Explanation: 'h' appears 1 time, 'e' appears 1 time, 'l' appears 2 times, 'o' appears 1 time
```

**Example 2:**
```
Input: s = "programming"
Output: p:1 r:2 o:1 g:2 a:1 m:2 i:1 n:1
Explanation: Each character's frequency is counted
```

## Test Cases

**Test Case 1:**
```
Input:
3
hello
programming
aaa

Output:
h:1 e:1 l:2 o:1
p:1 r:2 o:1 g:2 a:1 m:2 i:1 n:1
a:3
```

**Test Case 2:**
```
Input:
2
CodeDrill
A B C

Output:
C:1 o:1 d:1 e:1 D:1 r:1 i:1 l:2
A:1 :2 B:1 C:1
```

**Test Case 3:**
```
Input:
4
abc
AAaa
12321
Hello World

Output:
a:1 b:1 c:1
A:2 a:2
1:2 2:2 3:1
H:1 e:1 l:3 o:2 :1 W:1 r:1 d:1
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
    findCharacterFrequency(s) {
        const frequency = {};
        const result = [];
        
        // Count frequency of each character
        for (let char of s) {
            frequency[char] = (frequency[char] || 0) + 1;
        }
        
        // Build result in order of first appearance
        for (let char of s) {
            if (frequency[char] > 0) {
                result.push(`${char}:${frequency[char]}`);
                frequency[char] = 0; // Mark as processed
            }
        }
        
        return result.join(' ');
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
        const result = solution.findCharacterFrequency(s);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def find_character_frequency(self, s):
        frequency = {}
        result = []
        
        # Count frequency of each character
        for char in s:
            frequency[char] = frequency.get(char, 0) + 1
        
        # Build result in order of first appearance
        seen = set()
        for char in s:
            if char not in seen:
                result.append(f"{char}:{frequency[char]}")
                seen.add(char)
        
        return ' '.join(result)

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        s = lines[i]
        result = solution.find_character_frequency(s)
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
    string findCharacterFrequency(string s) {
        unordered_map<char, int> frequency;
        vector<string> result;
        unordered_set<char> seen;
        
        // Count frequency of each character
        for (char c : s) {
            frequency[c]++;
        }
        
        // Build result in order of first appearance
        for (char c : s) {
            if (seen.find(c) == seen.end()) {
                result.push_back(string(1, c) + ":" + to_string(frequency[c]));
                seen.insert(c);
            }
        }
        
        string output = "";
        for (int i = 0; i < result.size(); i++) {
            output += result[i];
            if (i < result.size() - 1) output += " ";
        }
        
        return output;
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
        string result = solution.findCharacterFrequency(s);
        cout << result << endl;
    }
    
    return 0;
}
````

# 29. Remove Vowels from String

    - **Difficulty:** Medium
    - **Topic Tags:** String, Character Filtering, String Manipulation
    - **Company Tags:** Adobe, Wipro, Capgemini, L&T Infotech

## Problem Description

Given a string, write a program to remove all vowels from it. Vowels are the letters 'a', 'e', 'i', 'o', 'u' (both uppercase and lowercase). The resulting string should contain only consonants, digits, spaces, and special characters.

You need to implement a function that takes a string as input and returns a new string with all vowels removed while preserving the order of remaining characters.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ length of string ≤ 10⁵
- String contains alphabetic characters, digits, spaces, and special characters
- Case insensitive vowel removal (remove both 'A' and 'a')

## Hints

1. Create a set of vowels for quick lookup: {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
2. Iterate through the string and skip characters that are vowels
3. Build the result string by appending non-vowel characters
4. Alternative: Use string filtering or regex for vowel removal

## Examples

**Example 1:**
```
Input: s = "hello world"
Output: "hll wrld"
Explanation: Removed vowels 'e', 'o', 'o' from the string
```

**Example 2:**
```
Input: s = "Programming"
Output: "Prgrmmng"
Explanation: Removed vowels 'o', 'a', 'i' from the string
```

## Test Cases

**Test Case 1:**
```
Input:
3
hello world
Programming
aeiou

Output:
hll wrld
Prgrmmng

```

**Test Case 2:**
```
Input:
2
CodeDrill
12345 AEIOUaeiou

Output:
CdDrll
12345 
```

**Test Case 3:**
```
Input:
4
Beautiful Day
HELLO WORLD
bcdfg
Test123!@#

Output:
Btfl Dy
HLL WRLD
bcdfg
Tst123!@#
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
    removeVowels(s) {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
        let result = "";
        
        for (let char of s) {
            if (!vowels.has(char)) {
                result += char;
            }
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
        const s = lines[i];
        const result = solution.removeVowels(s);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def remove_vowels(self, s):
        vowels = set('aeiouAEIOU')
        result = ""
        
        for char in s:
            if char not in vowels:
                result += char
        
        return result

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        s = lines[i]
        result = solution.remove_vowels(s)
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
    string removeVowels(string s) {
        unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
        string result = "";
        
        for (char c : s) {
            if (vowels.find(c) == vowels.end()) {
                result += c;
            }
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
    ss.ignore(); // Ignore the newline after t
    
    Solution solution;
    
    for (int i = 0; i < t; i++) {
        string s;
        getline(ss, s);
        string result = solution.removeVowels(s);
        cout << result << endl;
    }
    
    return 0;
}
````

# 30. Find Maximum Product of Two Numbers

    - **Difficulty:** Hard
    - **Topic Tags:** Array, Math, Sorting, Two Pointers, Optimization
    - **Company Tags:** Amazon, Microsoft, Google, Apple

## Problem Description

Given an array of integers, write a program to find the maximum product that can be obtained by multiplying any two numbers from the array. You need to consider all possible pairs and return the maximum product.

Note: The array can contain positive numbers, negative numbers, and zeros. Consider that the maximum product could come from two large positive numbers or two large negative numbers.

You need to implement a function that takes an array as input and returns the maximum product of any two numbers in the array.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 2 ≤ n ≤ 10⁵ (size of array, at least 2 elements)
- -10⁹ ≤ arr[i] ≤ 10⁹ (array elements)

## Hints

1. Sort the array and check products of first two and last two elements
2. Consider that maximum product might come from two negative numbers
3. Keep track of maximum and minimum values while iterating
4. Alternative: Check all pairs but optimize for larger arrays

## Examples

**Example 1:**
```
Input: arr = [3, 4, 1, 2]
Output: 12
Explanation: Maximum product is 3 × 4 = 12
```

**Example 2:**
```
Input: arr = [-10, -3, 0, 5, 9]
Output: 45
Explanation: Maximum product is 5 × 9 = 45
```

## Test Cases

**Test Case 1:**
```
Input:
3
4
3 4 1 2
5
-10 -3 0 5 9
3
-5 -2 -1

Output:
12
45
2
```

**Test Case 2:**
```
Input:
2
6
1 2 3 4 5 6
4
-10 -20 1 2

Output:
30
200
```

**Test Case 3:**
```
Input:
4
2
100 200
5
-100 -50 10 20 30
3
0 -5 10
4
-1 -2 -3 -4

Output:
20000
5000
0
12
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
    maxProduct(arr) {
        arr.sort((a, b) => a - b);
        
        // Maximum product can be either:
        // 1. Product of two largest numbers (last two elements)
        // 2. Product of two smallest numbers (first two elements, if both negative)
        const n = arr.length;
        const product1 = arr[0] * arr[1]; // Two smallest
        const product2 = arr[n-1] * arr[n-2]; // Two largest
        
        return Math.max(product1, product2);
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
        const result = solution.maxProduct(arr);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def max_product(self, arr):
        arr.sort()
        
        # Maximum product can be either:
        # 1. Product of two largest numbers (last two elements)
        # 2. Product of two smallest numbers (first two elements, if both negative)
        n = len(arr)
        product1 = arr[0] * arr[1]  # Two smallest
        product2 = arr[n-1] * arr[n-2]  # Two largest
        
        return max(product1, product2)

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
        result = solution.max_product(arr)
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
    long long maxProduct(vector<int>& arr) {
        sort(arr.begin(), arr.end());
        
        // Maximum product can be either:
        // 1. Product of two largest numbers (last two elements)
        // 2. Product of two smallest numbers (first two elements, if both negative)
        int n = arr.size();
        long long product1 = (long long)arr[0] * arr[1]; // Two smallest
        long long product2 = (long long)arr[n-1] * arr[n-2]; // Two largest
        
        return max(product1, product2);
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
        long long result = solution.maxProduct(arr);
        cout << result << endl;
    }
    
    return 0;
}
````

Similar code found with 1 license type