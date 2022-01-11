import React from 'react'

const TodoList = ({setTodos,todos,filteredTodos}) => {

    const deletetodoHandler=(id)=>{
      setTodos( todos.filter((item)=>item.id!==id))
    }
    const toggleTodoHandler=(id)=>{
       setTodos(todos.map((item)=>item.id===id?{...item,completed:!item.completed}:item))
    }
    return (
        <div>
            <h1>todo list</h1>
            <ul>
               {filteredTodos.map((item)=>{
                   return <li className={item.completed?"complete":"uncomplete"} key={item.id}>
                     <span>{item.text}</span>
                     <span><button onClick={()=>deletetodoHandler(item.id)}>deleteTodo</button></span>
                     <span><button onClick={()=>toggleTodoHandler(item.id)}>toggleTodo</button></span>
                   </li>
               })}
            </ul>
            
        </div>
    )
}

export default TodoList
