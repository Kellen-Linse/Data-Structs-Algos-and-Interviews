# Big O

- Big O == Asymptotic Analysis
- Helps developers talk on the efficiency of a solution to a specific problem or algorithm

#### Link to Cheatsheet: 

- [Link](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent)

#### What is Good Code?

- Two Points:
  - **Readability**
  - **Scalability**

- **Big O relates to scalability, sometimes at the expense of readability.**
<br>

#### Big O and Scalability

- In JS, in the browser, you can use `performance.now()` to test the time it takes for some given snippet of code to run.
- You cannot use time passed to calculate efficiency, since factors outside of the code itself can effect the length of the runtime. 
  - We need some way to discuss the efficiency of our code that excludes outside factors. 

##### Big O is the language we use to figure out how long it takes for an algorithm to run.

- Big O allows us to evaluate how our runtime will grow as our input grows.
  - As the number of elements in our input grows, how many more operations do we have to do?

#### Simplifying Big O

- **4 Rules to Follow:**
  1. Worst Case
  2. Remove Constants
  3. Different Terms for Different Inputs 
  4. Drop Non-Dominant Terms

#### Big O Cheatsheet

- [bigocheatsheet.com](https://www.bigocheatsheet.com/)
- [Link](Resources/BigO-cheat-sheet.pdf)

#### Why Big O Matters

- **Data Structures + Algorithms = Programs**
- Big O allows us to distinguish between good algorithms and bad algorithms.
- Big O is a core concept tested on in interviews.

#### Pillars of Programming

- What is good code?
  - Readability
  - Scalability
    - Speed
    - Memory

- 3 Pillars:
  - **Readability**
  - **Speed** (time complexity)
  - **Memory** (space complexity)

#### Space Complexity

- Space Complexity allows us to evaluate how much our memory needs grow as our input grows.

### "Great programmers pick the right data structure and the right algorithms to write great programs."