import React, { Component } from "react";
import API from "../utils/API";
import CharacterCreationForm from "../components/CharacterCreationForm";

class CharacterCreation extends Component {
    state = {
    };

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    };
    
    // Character stuff
    getCharacter = () => {
        API.getCharacters()
        .then(res => 
            console.log(res.data)
        )
        .catch(err => console.log(err));
    }
    
    createDefaultCharacter = () => {
        API.createCharacter({})
        .then(res => 
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

    pullData = () => {
        console.log(this.state)
        API.createCharacter(
            this.state
        )
            .then(res => 
            console.log(res.data)
        )
        .catch(err => console.log(err));
    }

    render(){
        return (
            <div>
                <button onClick={this.deleteAllCharacters}>Delete</button>
                <button onClick={this.createDefaultCharacter}>Add</button>
                <button onClick={this.getCharacter}>Characters</button>
                <a href="./characters">Characters</a>
                <CharacterCreationForm pullData={this.pullData} handleInputChange={this.handleInputChange} />
            </div>
        )
    }
}

export default CharacterCreation;