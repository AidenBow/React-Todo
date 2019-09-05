import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

const games = [
    {
      game: "Animal Crossing",
      id: 1,
      completed: false
    },
    {
      game: "Dark Souls",
      id: 2,
      completed: false
    },
    {
      game: "Rainbow 6 Siege",
      id: 3,
      completed: false
    },
    {
      game: "Skyrim",
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

  render() {
    return (
      <div>
        <TodoForm />
        <h2>Welcome to your Todo App!</h2>
        <TodoList games={this.state.games} />
      </div>
    );
  }
}

export default App;
