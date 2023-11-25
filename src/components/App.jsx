import React, {useState} from "react";


//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s



function App() {
//one state for keeping up with the input box and what is typed. Second one for updating the array with the new list item.

const [inputValue, setInputValue] = useState("")
const [items, setItems] = useState([]);

//handleChange function to keep track of the input value

function handleChange(event) {
  setInputValue(event.target.value);
};

//click function to execute the changes and add the input value into the array
   function handleClick() {
      
      setItems([inputValue,...items])
        setInputValue(""); 
      
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputValue} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
{/* mapping through the array to display them in a list item. */}
          
        {items.map((item, index) => (
            <li key={index}>{item}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default App;
