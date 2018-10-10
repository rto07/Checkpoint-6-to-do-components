 import React, { Component } from 'react';
 import './App.css';
import ToDo from './components/ToDo2.js';


 class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        todos:[
          { description: 'Walk the cat', isCompleted: true },
          { description: 'Throw the dishes way', isCompleted: false },
          { description: 'Buy new dishes', isCompleted: false },
        ],
        newTodoDescription:""
      };
    }

    handleChange(e){
      this.setState({newTodoDescription: e.target.value})
    }

    handleSubmit(e){
      e.preventDefault();
      if(!this.state.newTodoDescription) {return}
     const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription:"" });   
    }

    toggleComplete(index){
     const todos = this.state.todos.slice();
     const todo = todos[index];
     todo.isCompleted = todo.isCompleted ? false : true;
     this.setState({todos:todos})
    }

    deleteTodo(index){
     const todos = this.state.todos.map();
     this.setState({todos:todos})
     console.log("Delete Successful")
   }

//Add a delete button to the ToDo component.

//Define a deleteTodo method on the ToDo component. This method should call this.setState() and pass it a new array that doesn't have the to-do item being deleted. Consider using the .filter() array method to accomplish this without mutating state – do not use .splice(), which is a mutable method, unless making a copy of the array first.

//Pass the deleteTodo method to the ToDo component as a prop.

//Add an onClick event listener to the delete button, and have it call deleteTodo, passing it the index of the to-do.



   render() {
     return (
       <div className="App">
        <ul>
          
          {this.state.todos.map((todo, index) =>
          
            <ToDo key = {index} description = {todo.description} isCompleted = {todo.isCompleted} toggleComplete = { () => this.toggleComplete(index)} deleteToDo = { () => this.deleteTodo(index)}/>;
          )}
        </ul>

        
        <form onSubmit = {(e) => this.handleSubmit(e)}>
          <input type = "text" value = {this.state.newTodoDescription} onChange = {(e) => this.handleChange(e)}/>
          <input type = "submit" />
          </form>

       </div>
     );
   }
 }

 export default App;