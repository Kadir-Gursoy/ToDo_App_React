import React, { useState } from 'react'
import Header from './compenents/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from './compenents/TodoList';
import "./App.css"


const App = () => {

const [todos, setTodos] = useState([])

  return (
    <div className='App text-center'>
      <Header
      todos={todos}
      setTodos={setTodos}
      />
      <TodoList
      todos={todos}
      setTodos={setTodos}/>

      
      </div>
  )
}

export default App