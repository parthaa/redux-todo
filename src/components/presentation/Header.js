import React, { Component } from 'react';

class Header extends Component {
  setNewValue = (e) => { 
      e.preventDefault();
      this.props.add(this._input.value);
      this._input.value = "";
  }
  
  render() {
    let self = this;
    return (
      <div>
        <form onSubmit={this.setNewValue}>
          <input ref={  
            (e) => {
              self._input = e;
            }
          } type="text" />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default Header;