import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './SearchBar';

const App = () => {
  return (
    <div className="ui container" style={{marginTop:'10px'}}>
      <SearchBar/>
    </div>
  );
}



export default App;
ReactDOM.render(<App />,document.querySelector('#root'));
