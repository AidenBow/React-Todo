import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"
import "./components/TodoComponents/Todo.css"

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

  addGame = (e, gameName) => {
    e.preventDefault();
    
    if (gameName.length > 0) {
      const newGame = {
        name: gameName,
        id: Date.now(),
        completed: false
      };
      console.log(newGame)
      this.setState({
        games: [...this.state.games, newGame]
      });
    }
  }

    clearGames = (e) => {
      e.preventDefault()
      console.log("completed games cleared")
      this.setState({
        games: this.state.games.filter(game => game.completed === false)
      })
    }

  render() {
    return (
      <div className="app">
        
        <h2>Welcome to your Game Tracker!</h2>
        <TodoForm addGame={this.addGame}/>
        <TodoList games={this.state.games} 
        toggleGame={this.toggleGame}/>
        <button onClick={this.clearGames}>clear</button>
      </div>
    );
  }
}

export default App;
