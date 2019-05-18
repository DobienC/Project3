import React, { Component } from "react";
import API from "../utils/API";
import CharacterCard from "../components/CharacterCard";

class Characters extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    this.getCharacters();
  }

  // Character stuff
  getCharacters = () => {
    API.getCharacters()
      .then(res => 
        this.setState({
          characters: res.data
        })
      )
      .catch(err => console.log(err));
  }

  // User Stuff
  getUsers = () => {
    API.getUsers()
      .then(res =>
        console.log("Here: " + res.data)  
      )
      .catch(err => console.log(err));
  }

  createUser = () => {
    API.createUser({
      name: "Dobien",
      email: "Dobien@gmail.com",
      password: "Password"
    })
      .then(res => 
        console.log(res.data)
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div>
            <button onClick={this.deleteAllCharacters}>Delete</button>
            <button onClick={this.createDefaultCharacter}>Add</button>
            <button onClick={this.getCharacters}>Characters</button>
            <button onClick={this.createUser}>Test Users</button>
            <a href="./characterCreation">Create Character</a>
            {this.state.characters.map(character => (
              <CharacterCard name={character.name} id={character._id}/>
            ))}
            {/* <CharacterCard /> */}
        </div>
    )
  }
}

export default Characters;
