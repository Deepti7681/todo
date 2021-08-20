import React from 'react';
import { Button } from 'react-bootstrap';
import { RiCloseCircleLine } from 'react-icons/ri';
const TodoLists=(props)=>{

return (  
<div>
<Button onClick={()=>{
props.onSelect(props.id);
}}>
+
</Button>
<li>{props.text}</li>

</div>
);
};
export default TodoLists;