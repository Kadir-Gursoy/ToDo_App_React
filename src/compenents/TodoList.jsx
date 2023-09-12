import React from 'react'



const TodoList = ({todos, setTodos}) => {

    
    
    const handleDelete = (id) => {
        setTodos(todos.filter((item)=> item.id !==id))
    }
const handleCompleted =(id)=> {
    setTodos(todos.map((item)=> item.id === id ? {
        ...item, completed:!item.completed} : item
        ))
}
  return (

    <div className='container mt-4 border-top backgroundColor="purple"'>
        <div className='w-50 d-flex flex-column m-auto'>

           {todos.map((item)=> {
            // const [id, text, completed ] =item
            return(
                <div key={item.id} className='d-flex justify-content-between align-items-center mt-2 bg-info border rounded-3'>
                <input id={item.id} onClick={()=>handleCompleted(item.id)} type="checkbox" name=""  />
                <div className='mt-2'>
                <p className={item.completed ? "completed" : ""} > {item.text} </p>
                </div>
                <span onClick={()=> handleDelete(item.id)}>🆑</span>

            </div>

            )
           }
           )}
        <div>

    </div>
</div>
        
    </div>
  )
}

export default TodoList
