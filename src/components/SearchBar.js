import React from 'react';

class SearchBar extends React.Component {

state = {term:''};
  //do not put parens around callback function when we do not want the function
  //to be run when app renders

  render(){
    return (
      <div className="ui segment" >
        <form className="ui form" >
          <div className="field" >
            <label> Image Search </label>
            <input type="text" value={this.state.term} onChange={ (e) => this.setState({term: e.target.value}) }/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
