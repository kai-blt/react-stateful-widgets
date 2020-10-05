import React, { useState } from 'react'; 
import {render} from 'react-dom';

const toDoItems = ['test'];


export default function ToDo(props) {

    const [input, setInput] = useState('');
    const [listItem, addListItem] = useState(toDoItems)  


    const addLi = () => {
       addListItem({input})
       const li = <li>{toDoItems}</li>
       render(li, document.querySelector('ul'));
    }
  
    return (
        <div className='container'>
            <h2>To Do List:</h2>
            <div>
                <h3>Add item:</h3>
                <input type="text" value={input} onChange={event => setInput(event.target.value)}></input>
                <button onClick={() => addLi()}>Add</button>
                <ul>
                
                </ul>
            </div>
        </div>
  )
}