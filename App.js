
import React , {useState} from 'react';
import {Table} from 'react-bootstrap';
import TodoLists from './TodoLists';
const App =()=> {
const [inputList,setInputList]= useState("");
const [items, setItems]= useState([]); //empty array to add list
const itemEvent=(event)=>{
setInputList(event.target.value); //jb jb koi kuc likhega wo to wo setinputlist me add ho jyga
};
const listOfItems=()=>{
setItems((olditems)=>{
return[...olditems,inputList];
});
setInputList("");
};
/*const [edit, setEdit] = useState({
  id: null,
  value: ''
})
const update = value => {
  updateTodo(edit.id, value);
  setEdit({
    id: null,
    value: ''
  });
};
if (edit.id) {
  return <TodoLists edit={edit} onSubmit={update} />;
}*/
const deleteItem=(id)=>{
console.log("deleted");
setItems((olditems)=>{
return olditems.filter((arrElemt,index)=>{
return index!==id;
});
});
};
//  multiple elemnet render krna to react fragment use krna 
return(
 
<div>
<br/>
<h1>Todo list</h1>
<br/>
<input type="text" placeholder="add a items"
value={inputList}
 onChange={itemEvent}/>
<button onClick={listOfItems}>+</button>
<Table colspan="2">
  <thead>
    <tr>
      <th>items</th>
      <th colSpan="2">Actions</th>
      
      
    </tr>
  </thead>
  <tbody>{
  items.map((itemval,index)=>{
    return(
      <>
      <TodoLists key={index} id={index} text={itemval} onSelect={deleteItem}/>
    </>
     )})
    } 
</tbody>


</Table>
</div>
)
}
export default App;

