import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    const [tasks,setTasks] = useState(["learn typescript", "feed cat"]);

    const addTasks = ()=>{
        setTasks([...tasks,`Task${tasks.length+1}`])
    }
  return (
    <div>
        <h1>ToDoList</h1>
        <ul>
            {tasks.map((task,id)=>(
                <li key={id}>{task}</li>
            ))}
        </ul>
        <button onClick={addTasks}>Add task</button>
    </div>
  )
}

export default TodoList