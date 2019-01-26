import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

  onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 751108f46428a3fa5ee68c209a26b237f467cc3085ab8219ba1748814f99a075'
      }
    });
  }

  render(){
    return (
      <div className="ui conatiner" style={{marginTop:'10px'}} >
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App;
