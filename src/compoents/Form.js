import React from 'react'

const Form = ({setInputText,inputText,setSelect,setTodos,todos}) => {

    const addTodo=()=>{
        setTodos([...todos,{text:inputText,completed:false,id:Math.random()*100}])
        setInputText("")
    }
    return (
        <div>
            <input value={inputText} onChange={(e=>setInputText(e.target.value))} />
            <button onClick={addTodo}>add todo</button>
            <select onChange={(e)=>setSelect(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
            
        </div>
    )
}

export default Form
