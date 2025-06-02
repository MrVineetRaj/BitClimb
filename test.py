class Solution:
    def sum_of_two_numbers(self, a, b):
        sum = a+b;
        return sum;
  

def main ():
    solution = Solution()
    result = solution.sum_of_two_numbers(3, 5)
    print(f"The sum of 3 and 5 is: {result}")


if __name__ == "__main__":
    main()