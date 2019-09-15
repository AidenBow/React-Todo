import React from 'react'

const Todo = (props) => {
    return(
        <div className={props.game.completed ? "completed": ""}
        onClick={() => {props.toggleGame(props.game.id)}}>
            <p>{props.game.name}</p>
        </div>
    )
}

export default Todo