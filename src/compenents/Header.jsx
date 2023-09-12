import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';



const Header = ({todos, setTodos}) => {

const [task, setTask] = useState()



const handleSubmit = (e) => {
    e.preventDefault()
const newTodo = {
    id:uuidv4(),
    text:task,
    completed:false,
}
setTodos([...todos, newTodo])
setTask("")

}

 return (
    <div className='container text-center'>
        <h1 className='text-danger padding="10"'>TODO APP</h1>
        <div className='row justify-content-center mt-5'>
            <form onSubmit={handleSubmit} action="" className='d-flex w-50'>
                <input onChange={(e)=>setTask(e.target.value)} value={task} type="text" className='form-control'/>
                <button  disabled={!task} type='submit' className='btn btn-danger'>Add</button>
            </form>
        </div>
    
    </div>
  )
}

export default Header
