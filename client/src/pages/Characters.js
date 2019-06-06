import React, { Component } from "react";
import API from "../utils/API";
import CharacterCard from "../components/CharacterCard";

class Characters extends Component {
  state = {
    sort: this.props.match.params.sort,
    characters: []
  };

  decode = function(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return base64;
  }

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

  getRandomCharacters = () => {
    API.getCharacters()
      .then(res =>
        this.setState({
          characters: res.data.shuffle
        })
      )
  }

  getCharactersByClass = () => {
    API.getCharactersByClass()
      .then(res =>
        this.setState({
          characters: res.data
        })  
      )
      .catch(err => console.log(err.response));
  }

  getCharactersByRace = () => {
    API.getCharactersByRace()
      .then(res =>
        this.setState({
          characters: res.data
        })  
      )
      .catch(err => console.log(err.response));
  }

  sortByNewCharacters = () => {
    API.getCharacters()
      .then(res => 
        this.setState({
          characters: res.data.reverse()
        })
      )
      .catch(err => console.log(err));
  }

  getCharactersByName = () => {
    API.getCharactersByName()
      .then(res => 
        this.setState({
          characters: res.data
        })
      )
      .catch(err => console.log(err.reponse));
  }

  shuffle = () => {
    this.setState({
      characters: this.state.characters.sort(() => Math.random() - 0.5)
    })
  }

  render() {
    return (
        <div>
            <strong>Explore By: </strong>
            <button className="btn-primary mr-1 mt-1" onClick={this.sortByNewCharacters}>New</button>
            <button className="btn-primary mr-1 mt-1" onClick={this.shuffle}>Random</button>
            <button className="btn-primary mr-1 mt-1" onClick={this.getCharactersByClass}>Class</button>
            <button className="btn-primary mr-1 mt-1" onClick={this.getCharactersByRace}>Race</button>
            <button className="btn-primary mr-1 mt-1" onClick={this.getCharactersByName}>Name</button>
            <div className="container">
              <div className="row">
                {this.state.characters.map(character => (
                  <div className="col-lg-4 mb-2 mt-1">
                    <CharacterCard name={character.name} id={character._id} character={character}/>
                  </div>
                ))}
              </div>
            </div>
        </div>
    )
  }
}

export default Characters;