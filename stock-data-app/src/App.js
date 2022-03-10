import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Tyler",
      microsftValue: 100,
      nvidiaValue: 200,
      annapurnaValue: 300
    }
  }

  increaseValues(){
    this.setState((prevState) => ({
      microsftValue: prevState.microsftValue+1,
      nvidiaValue: prevState.nvidiaValue+1,
      annapurnaValue: prevState.annapurnaValue+1
    }))
  }

  decreaseValues(){
    this.setState((prevState) => ({
      microsftValue: prevState.microsftValue-1,
      nvidiaValue: prevState.nvidiaValue-1,
      annapurnaValue: prevState.annapurnaValue-1
    }))
  }

  render() {
    return (
      <div>
        <Welcome
          name={this.state.name}
        />
        <Main
          microsftValue={this.state.microsftValue}
          nvidiaValue={this.state.nvidiaValue}
          annapurnaValue={this.state.annapurnaValue}
          increase={this.increaseValues.bind(this)}
          decrease={this.decreaseValues.bind(this)}
        />
      </div>
    )
  }
}
export default App;
