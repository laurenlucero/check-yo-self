# check-yo-self
FE2001 Mod 1 Final Solo Project

## Overview of project and goals
Check Yo' Self is a checklist application. Users can create multiple to do lists with corresponding tasks to be completed. They can check off completed tasks.

## Overview of technologies used, challenges, and wins, any other reflections
Through this project, I demonstrated understanding of writing DRY JavaScript and using localStorage to persist data.
I used for loops to iterate through and filter DOM elements. I solidified my understanding of the different between the data model and how data is displayed on the DOM. I used Atom, gitHub, DevTools and Google as tools. It was also helpful to have classmates, instructors and my mentor to rubber duck through problems and ideas.
The architecture of the application consists of one HTML file, one CSS file, and three JavaScript files. The todo-list.js file contains a ToDoList class which includes a constructor and the following methods: saveToStorage, getFromStorage, deleteFromStorage, updateToDo, and updateTask. The ToDoList data model includes an id, title, tasks, and urgent property. The task.js file contains a Task class and constructor. Task object instances are held in the ToDoList class tasks property. The main.js file contains all DOM related JavaScript.

### Challenges
- Using localStorage to persist object instance data
- Keeping unique IDs on all object instances when reinstantiated
- Making changes on the DOM that were also reflected in the data model and persisted in localStorage
- Breaking functionality when trying to add new features
- Overall understanding of JavaScript syntax, array prototypes, classes and objects

### Wins
- Wireframing and planning HTML layout and CSS classes made writing the structure and style code more efficient
- Psuedo-coding and whiteboarding before programming deepened my understanding of JavaScript functionality
- Using innerHTML and interpolation to display stored data on the DOM
- Learning to reinstantiate object data after it is retrieved from local storage
- Overall understanding of JavaScript syntax, array prototypes, classes and objects (challenge and a win because it was hard but I learned from all the struggles!)

## Screenshots of comp and your app
