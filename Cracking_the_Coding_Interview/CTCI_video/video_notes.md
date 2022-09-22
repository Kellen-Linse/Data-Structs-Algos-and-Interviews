# Cracking the Facebook Coding Interview: The Approach

- These notes are based off of this talk by Gayle McDowell, Author of Cracking the Coding Interview:
  - [Link](https://www.youtube.com/watch?v=wCl9kvQGHPI)

### Intro

- This talk is about how to approach and succeed in a Facebook coding interview, but the lessons here can be applied to any coding interview, dispel any mysteries about the process, and to help those getting ready for interviews avoid common pitfalls.

### What to Expect

- This is a typical, general description of the process you may expect to see at Facebook.
  <br>
- Typical Interview:
  - Prior Experience: 5 minutes
  - 1 to 2 Questions: 45 minutes
    - 1 complex or 2 simpler
  - Questions FOR the Interviewer: 5 minutes

### Behavioral Questions

- Questions on your background
  <br>

#### Two minute pitch:

- Shows of success
- Prompt the interviewer
  - What do you want your interviewer to ask you about?
- Hobbies
  - If you have a compelling hobby.
  - Frame them in the most positive light.
  - Anything technical hobby

![ctci](./resources/ctci.JPG)

#### Your past work:

- 1 to 2 cool projects and be prepared to talk about them in depth:
  - Hard / cool
  - You played a central role
  - Technical Depth
  - What did you do?
  - What would you do differently?
    <br>
- All past work
  - Challenges, architecture, tradeoffs, mistakes, successes, motivations.
  - Teamwork, leadership, conflicts, etc.

#### What about YOU?

- Be **PASSIONATE**.
- Be **KNOWLEDGEABLE**
- Be a **GOOD TEAMMATE**
  <br>
- Show that you are someone who can contribute and that you are someone people want to work with.

### Design Questions

- Expect design questions relevant to your background
- Systems design and scalability for backend

  - Will be dependant on what role you are applying for as well.
    <br>

- The way you should approach design questions is with the acronym W.W.Y.D.A.W:

  - **W**hat **W**ould **Y**ou **D**o **A**t **W**ork
    <br>

- Scope the Problem
  - Ask questions
  - Make assumptions
- Define Key Components
  - Can be somewhat naive
- Identify Issues
  - Bottlenecks, tradeoffs
- Repair and Redesign
  <br>

- Discuss **Top -> Down**

  - General to specific
  - Talk about each component at an equal level of depth
    <br>

- Behavioral Part of System Design
  - **Drive**
    - Lead the process
    - Be open about issues
  - **Teamwork**
    - Be open to feedback
    - Tweak as necessary
  - **Use the whiteboard**
  - **You are leading, but it is a group discussion**

### How to Prepare for Design Questions

- Read about the design of major companies
  - Think, don't memorize
- Know key concepts
  - Tasks, sharding, caches.
- Web stacks, REST, etc...
- Practice back-of-the-envelop calculations

### Algorithm Questions

- Why Algorithm Questions are Asked because they show:
  - Your analytical skills
  - How you think
  - How you decide to make trade offs
  - How you push through hard problems
    - Are eager to work through hard problems
    - Aren't just happy with good enough
  - How well you communicate
  - How strong your CS fundamentals are

### Essential CS Knowledge

![cs](./resources/ctci-CS.JPG)

#### Preparation

- **MASTER** Big O
- Implement DS/Algorithms
- Practice with Real Interview Questions
  - **Check Glassdoor.com for real questions**
- Code on Paper or Whiteboard
  - Be able to write complete, syntactically correct code without helpers
  - Writing on paper/whiteboard is **slower**
    - Every mistake takes more time to fix than it would on a computer
- Mock Interviews
  - Services or Buddy
  - **It is helpful to play the role of the interviewer as well!!**
- **PUSH YOURSELF!**
  - Quality over quantity when it comes to practice problems!
  - When the interviewer asks you the problem, they are expecting you to not already know how to solve it, but to figure out how to solve it on the spot.
    - This means that you may struggle some, but how you push through the struggle is what the interviewer is looking to see!
  - Get comfortable seeing a problem, it being hard, and finding a way to make progress!
  - **Try to use the hints and looking at the answer as little as possible!**
    - Do as much as you can to push yourself forward before you look for more help!
      - (This is what you will want to do in an interview)

#### Big O Crash Course

- Big O is an equation to discuss how the runtime (or space) scales as the input grows.
- Big O is a discussion about the general trend, we therefore:

  - Drop constants
    <br>

- Common Mistakes:

  - Confusing O(n + m) and O(n^2)
    - Different inputs or different lengths of nested loops will lead to O(n \* m)
  - Confusing Adding and Multiplying - **Adding:** "I do this thing, it's done, I do this other thing." - **Multiplying:** "I do this thing for every time I do this other thing."
    <br>

- When you see recursion, you should be thinking memoization

#### Solving Algorithms
