
 

 // Functional programming approach
let todos_f = [];

const addTodo_f = (text) => {
  todos_f.push({ text, completed: false });
};

const removeTodo_f = (index) => {
  todos_f.splice(index, 1);
};

const toggleTodo_f = (index) => {
  todos_f[index].completed = !todos_f[index].completed;
};

addTodo_f("Learn JavaScript");
addTodo_f("Build a todo app");

toggleTodo_f(0);

console.log(todos_f);


// Procedural programming approach
let todos = [];

function addTodo(text) {
  todos.push({ text, completed: false });
}

function removeTodo(index) {
  todos.splice(index, 1);
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
}

addTodo("Learn JavaScript");
addTodo("Build a todo app");

toggleTodo(0);

console.log(todos);


// Object-oriented programming approach
class Todo {
   constructor(text) {
     this.text = text;
     this.completed = false;
   }
 
   toggle() {
     this.completed = !this.completed;
   }
 }
 
 class TodoList {
   constructor() {
     this.todos = [];
   }
 
   add(text) {
     this.todos.push(new Todo(text));
   }
 
   remove(index) {
     this.todos.splice(index, 1);
   }
 
   toggle(index) {
     this.todos[index].toggle();
   }
 }
 
 const todoList = new TodoList();
 todoList.add("Learn JavaScript");
 todoList.add("Build a todo app");
 
 todoList.toggle(0);
 
 console.log(todoList.todos);
 