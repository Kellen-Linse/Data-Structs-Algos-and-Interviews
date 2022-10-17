 

# Data Structures Introduction 

## 103: Which data structure is the best?

> Data Structure: **Collections of values**, the **relationships** among them, and the **functions** or operations that can be applied to the data.

- Why so many? 
  - Difference data structures excel at different things. Some are highly specialized and others (like arrays and objects) are more generalized.

- Why care?
  - The more time you spend as a developer, them more likely you are to need to use one of these data structures.
    - Each has it's time and it's place.
    - You have probably already worked with many of these data structures without knowing already.
    - **Interviews**

- There is no "One Best" data structure.

<br>

## 104: Class Overview 

> Class: a blueprint for creating objects with pre-defined properties and methods.
  - *These classes are actually syntactic sugar over JS's existing prototype based inheritance model.*

- Classes are what we use to implement our data structures.

<br> 

## 105: Class Keyword

- We use the **Class** keyword to define a class

```js
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```
- Class names conventionally start with a capital letter. 
- The method to create new objects is called 'constructor'
- The class keyword creates a constant, so you can not redefined it. 
 
<br>

- We use the **new** keyword to create and instance of a class.

```js
let firstStudent = new Student('Mya', 'Linse');
```

<br>

## 106: Instance Methods

- Instance Methods: 
  - Provides functionality that pertains to a single instance of a class.

```js
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName(){
    return `This students full name is ${this.firstName} ${this.lastName}.`;
  }
}

let firstStudent = new Student('Mya', 'Linse');

firstStudent.fullName(); // This students full name is Mya Linse.
```

## 107: Static Methods

- Class Methods, and the **static** keyword:
  - The `static` keyword defines a static method for a class. **Static methods are called without instantiating their class and CANNOT BE CALLED through a class instance. Static methods are often used to create utility functions for an application.**

  - Not related to an individual instance.
  - Are often **Helper Methods** or **Utility Methods**.

```js
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName(){
    return `This students full name is ${this.firstName} ${this.lastName}.`;
  }
}

static enrollStudents(){
  return 'Enrolled Students';
}

let firstStudent = new Student('Mya', 'Linse');

firstStudent.enrollStudents(); // This will return an error.
Student.enrollStudents(); // 'Enrolled Students'
```