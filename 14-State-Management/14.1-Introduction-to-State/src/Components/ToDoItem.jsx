import React from "react";


const ToDoItem = ({isDone, toogleStrikeThrough})=> {

    const strikeThroughStyle = isDone ? {textDecoration: 'line-through'} : null; 

    return(
        <p 
            className={`todo-item ${isDone ? 'done' : ''}`}   
            style = {strikeThroughStyle} 
            onClick={toogleStrikeThrough}
        >
        Buy Milk
        </p>
    )
}

export default ToDoItem;


