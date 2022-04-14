# Coding Skills

- For technical interviews, focus on fundamental coding skills.

## 6 Things You can do in a Coding Interview to Show Off Your Coding Skills.

##### 1: Descriptive Variable Naming

- **Name your variables in such a way that at reader or your interviewer can understand what is going on.**
- Better to be descriptive and long than confusing and short.
  - Within reason.
- If you need to use a short variable to save time, communicate that with your interviewer.
- Helps with communication and helps the interviewer follow along.
<br>

##### 2: Abstraction and Making Use of Helper Methods

- Separate your code into logic units
- Reduce repetition
- **Separate it out**
<br>

- You can abstract the less meaningful parts of the code, and define the bulk of your algorithm first, communicating what it does and that you will define it later.
<br>

##### 3: Documentation

- Not all coding problems will lend themselves to this, but some will.
- **This is a good positive signal to show the interviewer that you know how to document your code when there is something confusing.**
- This can help with communication with your interviewer.

##### 4: Descriptive Code

- This extends 1, and 3, but goes further.
- If there are complex or confusing parts of your code try to make them easier to understand.
- **Encapsulate complex logic whenever possible.**
- Example:

```js

// instead of 

if(myElement % 4 && myElement > 80 && myElement < 100) "do some thing" ;

// Do

let descriptiveTestCondition = myElement % 4 && myElement > 80 && myElement < 100;

if(descriptiveTestCondition) "do some thing";

// This is substantially more readable

```

##### 5: Idiomatic Coding Style

- Every coding language has a "good version" of how to code in that language.
- Example:
  - In JS, **it is probably better to use the build in methods rather than try to do it yourself.**
    - **UNLESS TOLD OTHERWISE, ALWAYS ASK**
    - It may make less sense to **NOT** use the built in methods if you are allowed to.
<br>

- **Know your language!**
- <br>

##### 6: Testing

- **If you can demonstrate that you can create good tests for your algorithms, that is going to be a good signal.**
- Generally, you don't need to write out the tests, just speak to what you would do.
  - Cover edge cases
  - Cover normal cases
  - Speak to what you would do with tougher constraints
<br>

## Myth: Simple Coding Mistakes or Typos are the End of the World

- Simple coding mistakes or typos are **not** the end of the world!
- **but they do add up!!**
- <br>

## Practice Tip:

- **Treat and act like every problem you solve is being asked in a real interview.**
- Don't take shortcuts just because you are practicing at home.
- Get in the habit of doing everything correctly, **don't assume you will do everything the correct way in the real interview.**