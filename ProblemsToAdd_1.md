# 1. Sum of Two Numbers
   - **Difficulty:** Easy
   - **Topic Tags:** Math, Arithmetic, Easy Operations
   - **Company Tags:** Apple, Netflix, Adobe, TechCorp
## Problem Description

Given two integers, write a program to find their sum. This is a Easy arithmetic problem where you need to add two numbers and return the result.

You need to implement a function that takes two integers as input and returns their sum.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- -10⁹ ≤ a, b ≤ 10⁹
- The sum will always fit within a 32-bit signed integer range

## Examples

**Example 1:**
```
Input: a = 5, b = 3
Output: 8
Explanation: 5 + 3 = 8
```

**Example 2:**
```
Input: a = -10, b = 15
Output: 5
Explanation: -10 + 15 = 5
```

## Test Cases

**Test Case 1:**
```
Input:
3
5 3
-10 15
0 0

Output:
8
5
0
```

**Test Case 2:**
```
Input:
2
100 200
-50 -30

Output:
300
-80
```

**Test Case 3:**
```
Input:
4
1 1
-5 5
1000000 2000000
-1000 1000

Output:
2
0
3000000
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
    sumOfTwoNumbers(a, b) {
        return a + b;
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
        const result = solution.sumOfTwoNumbers(a, b);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def sum_of_two_numbers(self, a, b):
        return a + b

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        a, b = map(int, lines[i].split())
        result = solution.sum_of_two_numbers(a, b)
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
    int sumOfTwoNumbers(int a, int b) {
        return a + b;
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
        int result = solution.sumOfTwoNumbers(a, b);
        cout << result << endl;
    }
    
    return 0;
}
````


---
# 2. Find Maximum in Array
- Difficulty: Easy
- Topic Tags: Array, Linear Search, Math
- Company Tags: Tesla, Spotify, Uber, DataFlow
## Problem Description

Given an array of integers, write a program to find the maximum element in the array. You need to iterate through all elements and return the largest value present in the array.

You need to implement a function that takes an array of integers as input and returns the maximum element from that array.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ n ≤ 10⁵ (size of array)
- -10⁹ ≤ arr[i] ≤ 10⁹ (array elements)

## Examples

**Example 1:**
```
Input: arr = [3, 7, 1, 9, 2]
Output: 9
Explanation: The maximum element in the array is 9
```

**Example 2:**
```
Input: arr = [-5, -2, -10, -1]
Output: -1
Explanation: Among all negative numbers, -1 is the maximum
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
9
-1
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
30
50
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
1000000
-1
200
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
    findMaximum(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
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
        const result = solution.findMaximum(arr);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def find_maximum(self, arr):
        max_val = arr[0]
        for num in arr:
            if num > max_val:
                max_val = num
        return max_val

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
        result = solution.find_maximum(arr)
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
    int findMaximum(vector<int>& arr) {
        int maxVal = arr[0];
        for (int i = 1; i < arr.size(); i++) {
            if (arr[i] > maxVal) {
                maxVal = arr[i];
            }
        }
        return maxVal;
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
        int result = solution.findMaximum(arr);
        cout << result << endl;
    }
    
    return 0;
}
````

---


# 3. Check Even or Odd
   - **Difficulty:** Easy
   - **Topic Tags:** Math, Modulo Operation, Number Theory
   - **Company Tags:** Google, Microsoft, Amazon, Meta

## Problem Description

Given an integer, write a program to determine whether the number is even or odd. A number is considered even if it is divisible by 2 (i.e., remainder is 0 when divided by 2), otherwise it is odd.

You need to implement a function that takes an integer as input and returns a string indicating whether the number is "Even" or "Odd".

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- -10⁹ ≤ n ≤ 10⁹ (input number)

## Examples

**Example 1:**
```
Input: n = 4
Output: Even
Explanation: 4 is divisible by 2, so it's even
```

**Example 2:**
```
Input: n = 7
Output: Odd
Explanation: 7 is not divisible by 2, so it's odd
```

## Test Cases

**Test Case 1:**
```
Input:
3
4
7
0

Output:
Even
Odd
Even
```

**Test Case 2:**
```
Input:
2
-6
-3

Output:
Even
Odd
```

**Test Case 3:**
```
Input:
4
1
2
100
-25

Output:
Odd
Even
Even
Odd
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
    checkEvenOrOdd(n) {
        if (n % 2 === 0) {
            return "Even";
        } else {
            return "Odd";
        }
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
        const result = solution.checkEvenOrOdd(n);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def check_even_or_odd(self, n):
        if n % 2 == 0:
            return "Even"
        else:
            return "Odd"

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        n = int(lines[i])
        result = solution.check_even_or_odd(n)
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
    string checkEvenOrOdd(int n) {
        if (n % 2 == 0) {
            return "Even";
        } else {
            return "Odd";
        }
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
        string result = solution.checkEvenOrOdd(n);
        cout << result << endl;
    }
    
    return 0;
}
````


---


# 4. Reverse a String
    - **Difficulty:** Medium
    - **Topic Tags:** String, Two Pointers, Character Manipulation
    - **Company Tags:** Google, Microsoft, Facebook, Amazon

## Problem Description

Given a string, write a program to reverse it. You need to return the string with characters in reverse order. For example, if the input string is "hello", the output should be "olleh".

You need to implement a function that takes a string as input and returns the reversed string.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ length of string ≤ 10⁵
- String contains only printable ASCII characters

## Examples

**Example 1:**
```
Input: s = "hello"
Output: olleh
Explanation: Reversing "hello" gives "olleh"
```

**Example 2:**
```
Input: s = "world"
Output: dlrow
Explanation: Reversing "world" gives "dlrow"
```

## Test Cases

**Test Case 1:**
```
Input:
3
hello
world
a

Output:
olleh
dlrow
a
```

**Test Case 2:**
```
Input:
2
programming
12345

Output:
gnimmargopr
54321
```

**Test Case 3:**
```
Input:
4
abc
racecar
CodeDrill
Hello World

Output:
cba
racecar
llirDedoC
dlroW olleH
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
    reverseString(s) {
        let reversed = "";
        for (let i = s.length - 1; i >= 0; i--) {
            reversed += s[i];
        }
        return reversed;
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
        const result = solution.reverseString(s);
        console.log(result);
    }
});
````

### Python
````python
import sys

class Solution:
    def reverse_string(self, s):
        reversed_str = ""
        for i in range(len(s) - 1, -1, -1):
            reversed_str += s[i]
        return reversed_str

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        s = lines[i]
        result = solution.reverse_string(s)
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
    string reverseString(string s) {
        string reversed = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            reversed += s[i];
        }
        return reversed;
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
        string result = solution.reverseString(s);
        cout << result << endl;
    }
    
    return 0;
}
````

# 5. Count Vowels in a String
    - **Difficulty:** Medium
    - **Topic Tags:** String, Character Counting, Linear Search
    - **Company Tags:** Adobe, Wipro, Capgemini, L&T Infotech

## Problem Description

Given a string, write a program to count the number of vowels in it. Vowels are the letters 'a', 'e', 'i', 'o', 'u' (both uppercase and lowercase). You need to iterate through the string and count how many vowel characters are present.

You need to implement a function that takes a string as input and returns the count of vowels in that string.

## Constraints

- 1 ≤ t ≤ 1000 (number of test cases)
- 1 ≤ length of string ≤ 10⁵
- String contains only alphabetic characters and spaces

## Examples

**Example 1:**
```
Input: s = "hello"
Output: 2
Explanation: The vowels in "hello" are 'e' and 'o', so count is 2
```

**Example 2:**
```
Input: s = "programming"
Output: 3
Explanation: The vowels in "programming" are 'o', 'a', and 'i', so count is 3
```

## Test Cases

**Test Case 1:**
```
Input:
3
hello
programming
aeiou

Output:
2
3
5
```

**Test Case 2:**
```
Input:
2
xyz
Beautiful Day

Output:
0
6
```

**Test Case 3:**
```
Input:
4
CodeDrill
AEIOU
bcdfg
Hello World

Output:
3
5
0
3
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
    countVowels(s) {
        const vowels = "aeiouAEIOU";
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            if (vowels.includes(s[i])) {
                count++;
            }
        }
        return count;
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
        const result = solution.countVowels(s);
        console.log(result);
    }
});
````

### Python
````python
# filepath: solution.py
import sys

class Solution:
    def count_vowels(self, s):
        vowels = "aeiouAEIOU"
        count = 0
        for char in s:
            if char in vowels:
                count += 1
        return count

def main():
    input_data = sys.stdin.read().strip()
    lines = input_data.split('\n')
    
    t = int(lines[0])
    solution = Solution()
    
    for i in range(1, t + 1):
        s = lines[i]
        result = solution.count_vowels(s)
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
    int countVowels(string s) {
        string vowels = "aeiouAEIOU";
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            if (vowels.find(s[i]) != string::npos) {
                count++;
            }
        }
        return count;
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
        int result = solution.countVowels(s);
        cout << result << endl;
    }
    
    return 0;
}




