import React from 'react'
import Todo from "./Todo"

const TodoList = (props) => {

    return(
        <div>
            {props.games.map(game => 
                <Todo game={game} />
                )}
        </div>
    )
}

export default TodoList