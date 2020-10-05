import React, { useState } from 'react'; 


//Create To Do Array
const toDoItems = [];


export default function ToDo(props) {
    //Set up state hooks
    const [input, setInput] = useState('');
    const [listItem, addListItem] = useState(toDoItems); 

    //Add to list helper function
    const addToList = (input) => {
       addListItem([...listItem, input]);     
    }

    const removeFromList = (event) => {
        //Get the closest li from the event target
        let liToRemove = event.target.closest('li');
        console.log(listItem.indexOf(liToRemove.textContent));
        addListItem([...listItem]);
    }
  
    return (
        <div className='container'>
            <h2>My To Do List:</h2>
            <div>
                <h3>My To Do List:</h3>
                <input type="text" value={input} onChange={event => setInput(event.target.value)}></input>
                <button onClick={() => addToList(input)}>Add</button>
                <ul>
                    {
                        listItem.map((item, index) => {        
                           return <li key={index}>{item} 
                           <button onClick={() => removeFromList(index)}>x</button></li>
                       })
                    }
                </ul>
            </div>
        </div>
  )
}