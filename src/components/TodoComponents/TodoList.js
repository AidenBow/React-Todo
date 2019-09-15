import React from 'react'
import Todo from "./Todo"

const TodoList = (props) => {

    return(
        <div>
            {props.games.map(game => 
                <Todo key={game.id} game={game} toggleGame={props.toggleGame}/>
                )}
        </div>
    )
}

export default TodoList