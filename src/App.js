import React from 'react';
import { Component } from 'react/cjs/react.production.min';
// import Counter from './Counter';
import LifeCycleComponenet from './LifeCycleComponent';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleComponenet color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
