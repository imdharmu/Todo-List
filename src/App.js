import React ,{useState} from 'react';
import './App.css';
import TodoList from './TodoList';
function App() {
  const[inputList,setInputList]=useState("");

  const[items,setItems]=useState([]);


  const itemEvent=(event)=>{
    setInputList(event.target.value)
  } ;
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return[...oldItems,inputList];
    });
    setInputList("")
  };
  const deleteItem=(id)=>{
    // console.log('delete')

    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
      return index !==id;
      })
    })
};

  return (
   <>
   <div className="main_div">
    <div className="center_div">
      
      <h1>ToDo List</h1>
      <br />
      <input type="text" name="" id="" placeholder='Add a Item'  value={inputList} onChange={itemEvent}/>
      <button onClick={listOfItems}>+</button>

      <ol>
        {/* <li>{inputList}</li> */}

       {items.map( (itemval,index) =>
        {
       return <TodoList 
       key={index}
       id={index}
       text={itemval}
       onSelect={deleteItem}
       />
        })}
      </ol>
    </div>
   </div>
   </>
   
  );
}

export default App;
