import React from 'react';

class SearchBar extends React.Component {
state = {term:''};


  //do not put parens around callback function when we do not want the function
  //to be run when app renders
onFormSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.term)
}
//arrow function automatically binds this to instance of search bar
  //can also use this.onFormSubmit = this.onFormSubmit.bind(this) in constructor

  render(){
    return (
      <div className="ui segment" >
        <form onSubmit={this.onFormSubmit} className="ui form" >
          <div className="field" >
            <label> Image Search </label>
            <input
              type="text"
              value={this.state.term}
              onChange={ (e) => this.setState({term: e.target.value}) }
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
