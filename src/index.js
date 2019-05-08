import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/presentation/Header';
import Body from './components/presentation/Body';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      values: []
    };
  }
  onSubmit = (val) => {
    let newVals = [...this.state.values];
    newVals.push(val);
    this.setState({ values: newVals });
  }

  removeItem = (index) => {
    const values = this.state.values;
    let newVals = values.slice(0, index).concat(values.slice(index + 1, values.length));
    this.setState({ values: newVals });
  }
  
  render() {
    return (
      <div>
        <Header onSubmit={this.onSubmit} />
        <Body onClick={this.removeItem} list={this.state.values} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
