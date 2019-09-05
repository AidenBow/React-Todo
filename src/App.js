import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

const games = [
    {
      name: "Animal Crossing",
      id: 1,
      completed: false
    },
    {
      name: "Dark Souls",
      id: 2,
      completed: false
    },
    {
      name: "Rainbow 6 Siege",
      id: 3,
      completed: false
    },
    {
      name: "Skyrim",
      id: 4,
      completed: false
    },
]

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      games
    };
  }

  toggleGame = (gameId) => {
    console.log(gameId)
    this.setState({
      games: this.state.games.map(game => {
        if (game.id === gameId) {
          return { ...game, completed: !game.completed }
        }
        return game
      })
    })
  }

  render() {
    return (
      <div>
        <TodoForm />
        <h2>Welcome to your Todo App!</h2>
        <TodoList games={this.state.games} toggleGame={this.toggleGame}/>
      </div>
    );
  }
}

export default App;
