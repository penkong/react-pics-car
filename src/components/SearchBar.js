import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term : ''};
  
  onInputChange = (e) => {
    this.setState({term : e.target.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input value={this.state.term} onChange={this.onInputChange} type="text" />
          </div>
        </form>
      </div>
    );
  }
}


export default SearchBar;