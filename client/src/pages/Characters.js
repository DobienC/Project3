import React, { Component } from "react";
import API from "../utils/API";

class Books extends Component {
  state = {
    characters: []
  };

  // Character stuff
  getCharacter = () => {
    API.getCharacters()
      .then(res => 
        console.log(res.data)
        //this.setState({characters: res.data})
      )
      .catch(err => console.log(err));
  }

  createCharacter = () => {
    API.createCharacter({})
      .then(res => 
        // this.setState({characters: res})
        console.log(res.data)
      )
      .catch(err => console.log(err));
  }

  deleteAllCharacters = () => {
    API.clearCharacter()
      .then(res =>
        console.log(res.data)
      )
      .catch(err => console.log(err));
  }

  render() {
    // this.createCharacter();
    // this.getCharacter();
    // this.deleteAllCharacters();
    return (
        <div>
            <button onClick={this.deleteAllCharacters}>Delete</button>
            <button onClick={this.createCharacter}>Add</button>
            <button onClick={this.getCharacter}>Characters</button>
            {/* {this.state.characters.map(item => <div>Hello</div>)} */}
            {/* {this.getCharacter()} */}
            {this.state.characters.map((item) => <div>Hello</div>)}
        </div>
    )
  }
}

export default Books;
