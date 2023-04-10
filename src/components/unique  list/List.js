import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const todos = [
    { id : uuidv4() ,title : "todo1" , desc : "todo desc 01"},
    { id : uuidv4(),title : "todo2" , desc : "todo desc 02"},
    { id : uuidv4() ,title : "todo3" , desc : "todo desc 03"},

]

const List = () => {
    
  return (
    <div>
        {todos.map((todo ,index) => {
            return <div key={todo.id}>
                <h2>{todo.id}</h2>
                <h3>{todo.title}</h3>
                <h5>{todo.desc}</h5>
            </div>
        })}
      
    </div>
  )
}

export default List ;

