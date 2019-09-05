import React from 'react'

const Todo = (props) => {
    return(
        <div onClick={() => {props.toggleGame(props.game.id)}}>
            <p>{props.game.name}</p>
        </div>
    )
}

export default Todo