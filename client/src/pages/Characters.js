import React, { Component } from "react";
import API from "../utils/API";
import CharacterCard from "../components/CharacterCard";

class Characters extends Component {
  state = {
    sort: this.props.match.params.sort,
    characters: []
  };

  componentDidMount() {
    if(this.props.match.params.sort === "new"){
      console.log("HERER");
    } else {
      this.getCharacters();
    }
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

  getCharactersByStr = () => {
    API.getCharactersByStr()
      .then(res =>
        this.setState({
          characters: res.data
        }) 
      )
      .catch(err => console.log(err.response));
  }

  sortByNewCharacters = () => {
    this.setState({
      characters: this.state.characters.reverse()
    })
  }

  isSorted = () => {
    if(this.state.sort === "new"){
      console.log("Here")
    } else {
      console.log("UNDEFINED")
    }
  }

  render() {
    return (
        <div>
            {this.findCharacter}
            <button onClick={this.getCharactersByStr}>Sort</button>
            <button onClick={this.sortByNewCharacters}>New</button>
            <button onClick={this.getCharacters}>Characters</button>
            <a href="./characterCreation">Create Character</a>
            {this.state.characters.map(character => (
              <CharacterCard name={character.name} id={character._id} character={character}/>
            ))}
            {/* <CharacterCard /> */}
        </div>
    )
  }
}

export default Characters;


  // User Stuff
  // getUsers = () => {
  //   API.getUsers(0)
  //     .then(res =>
  //       console.log("Here: " + res.data)  
  //     )
  //     .catch(err => console.log(err));
  // }

  // createUser = () => {
  //   API.createUser({
  //     name: "Dobien",
  //     email: "Dobien@gmail.com",
  //     password: "Password"
  //   })
  //     .then(res => 
  //       console.log(res.data)
  //     )
  //     .catch(err => console.log(err));
  // }
