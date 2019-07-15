import React from 'react';
import './App.css';
import UserBoard from './components/UserBoard'

class Clock extends React.Component {
  state = {
    date: new Date()
  }

  tick = () => {
    this.setState({ date: new Date() })
  }

  componentDidMount(){
    setInterval(this.tick, 1000)
  }

  render(){
    return <h1>
      <span>{this.state.date.getHours()}</span>
      :
      <span>{this.state.date.getMinutes()}</span>
      :
      <span>{this.state.date.getSeconds()}</span>
    </h1>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserBoard />
        <Clock />
      </header>
    </div>
  );
}

export default App;
