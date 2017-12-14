import React, { Component } from 'react';
import CompatibilityDisplay from './components/compatibility/CompatibilityDisplay';
import DogeList from './components/list/DogeList';
import dogeApi from './doge_api';
// CSS Framework https://milligram.io
import 'milligram'
import './App.css';

window.dogeApi = dogeApi

class App extends Component {
  state = {
    dogeAIndex: 0,
    dogeBIndex: 1,
    doges: []
  }

  componentDidMount() {
    dogeApi.fetchAll(doges => {
      this.setState(prevState => ({...prevState, doges}))
    })
  }

  selectDoge = (id) => {
    this.setState(prevState => {
      const selectedDoge = prevState.doges.find(doge => doge.id === id)
      const selectedIndex = prevState.doges.indexOf(selectedDoge)
      return {
        ...prevState,
        dogeAIndex: selectedIndex,
        dogeBIndex: prevState.dogeAIndex
      }
    })
  }

  render() {
    const { doges, dogeAIndex, dogeBIndex } = this.state

    return (
      <div className="App">
        <div className="container">
          <img className="App-logo" alt="Logo" src="logo.png" />

          <CompatibilityDisplay
            dogeA={doges[dogeAIndex]}
            dogeB={doges[dogeBIndex]}
          />

          <DogeList
            doges={doges}
            selectDoge={this.selectDoge}
          />
        </div>
      </div>
    );
  }
}

export default App;
