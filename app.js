//array of data objects

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

const Player = props => {
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>
      <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>✖</button>
      <Counter />
    </div>
  );
};

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
  };

  decrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score - 1
    }));
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          {" "}
          -{" "}
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  
  handleRemovePlayer = (id) => {
    this.setState( prevState =>{
      return {
        players: prevState.players.filter( p => p.id !== id)
      };
    });
  }

  state = {
    players:[{
      name: "Dan",
      id: 1
    },
    {
      name: "Deep",
      id: 2
    },
    {
      name: "Logan",
      id: 3
    },
    {
      name: "Joey",
      id: 4
    }]
  };
  
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        {this.state.players.map(player => (
          <Player 
          name={player.name} 
          key={player.id.toString()} 
          id={player.id}
          removePlayer={this.handleRemovePlayer}/>
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
