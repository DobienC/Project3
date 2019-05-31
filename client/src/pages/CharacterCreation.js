import React, { Component } from "react";
import API from "../utils/API";
import CharacterCreationForm from "../components/CharacterCreationForm";

class CharacterCreation extends Component {
    state = {
        points: 21,
        strength: 8,
        dexterity: 8,
        constitution: 8,
        intelligence: 8,
        wisdom: 8,
        charisma: 8
    };

    handleInputChange = event => {
        const attrList = ["strength","dexterity","constitution","intelligence","wisdom","charisma"]
        const attrId = event.target.id;
        var change = 0;
        const { id, value } = event.target;
        if(attrList.indexOf(attrId) !== -1){
            switch(attrList.indexOf(attrId)){
                case 0:
                    change = this.state.strength - value;
                    break;
                case 1:
                    change = this.state.dexterity - value;
                    break;
                case 2:
                    change = this.state.constitution - value;
                    break;
                case 3:
                    change = this.state.intelligence - value;
                    break;
                case 4:
                    change = this.state.wisdom - value;
                    break;
                case 5:
                    change = this.state.charisma - value;
                    break;
            }
            this.setState({
                points: this.state.points+change
            })
        }
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
            // console.log(res.data)
            window.location.assign('/characters')
        )
        .catch(err => console.log(err));
    }

    render(){
        return (
            <div>
                <p>{this.state.points}</p>
                <CharacterCreationForm pullData={this.pullData} handleInputChange={this.handleInputChange} />
            </div>
        )
    }
}

export default CharacterCreation;