import React, { useState } from 'react'; 


//Create To Do Array
const toDoItems = [];
let idCount = 0;

export default function ToDo(props) {
    //Set up state hooks
    const [input, setInput] = useState('');
    const [listItem, addListItem] = useState(toDoItems); 

    //Add to list helper function
    const addToList = (input) => {
        //Make an item object with an id and some text. idCount is a unique number for the item.
        let item = {id: input + idCount, text: input};
        idCount++; //Increment when adding items for more unique ids
        addListItem([...listItem, item]); //Spread the previous array contents and add the newly created object
    }

    const removeFromList = (id) => {
        //Create a new list out of all of the items EXCEPT the one that has an id of the LI where the button was clicked
        const newList = listItem.filter(item => item.id !== id);
        //Refresh list for re render
        addListItem(newList);
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
                           return <li key={item.id + index}>{item.text} 
                           <button onClick={() => removeFromList(item.id)}>x</button></li>
                       })
                    }
                </ul>
            </div>
        </div>
  )
}