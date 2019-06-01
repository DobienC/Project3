import React, { Component } from "react";
import API from "../utils/API";
import CharacterCreationForm from "../components/CharacterCreationForm";

class CharacterCreation extends Component {
    state = {
        points: 27,
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
                    if(this.state.strength > 12){
                        if(this.state.strength > value){
                            if(value >= 13){
                                change += 1;
                            }
                        } else {
                            change--;
                        }
                    }
                    break;
                case 1:
                    change = this.state.dexterity - value;
                    if(this.state.dexterity > 12){
                        if(this.state.dexterity > value){
                            if(value >= 13){
                                change += 1;
                            }
                        } else {
                            change--;
                        }
                    }
                    break;
                case 2:
                    change = this.state.constitution - value;
                    if(this.state.constitution > 12){
                        if(this.state.constitution > value){
                            if(value >= 13){
                                change += 1;
                            }
                        } else {
                            change--;
                        }
                    }
                    break;
                case 3:
                    change = this.state.intelligence - value;
                    if(this.state.intelligence > 12){
                        if(this.state.intelligence > value){
                            if(value >= 13){
                                change += 1;
                            }
                        } else {
                            change--;
                        }
                    }
                    break;
                case 4:
                    change = this.state.wisdom - value;
                    if(this.state.wisdom > 12){
                        if(this.state.wisdom > value){
                            if(value >= 13){
                                change += 1;
                            }
                        } else {
                            change--;
                        }
                    }
                    break;
                case 5:
                    change = this.state.charisma - value;
                    if(this.state.charisma > 12){
                        if(this.state.charisma > value){
                            if(value >= 13){
                                change += 1;
                            }
                        } else {
                            change--;
                        }
                    }
                    break;
                default:
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

    createCharacter = () => {
        API.createCharacter(
            this.state
        )
            .then(res => 
            // console.log(res.data)
            window.location.assign('/characters')
        )
        .catch(err => console.log(err));
    }

    pullData = () => {
        if(this.state.points < 0){
            alert("Must reduce Points");
        } else {
            switch(this.state.race){
                case "Human":
                    this.setState({
                        strength: Number(this.state.strength) + 1,
                        dexterity: Number(this.state.dexterity) + 1,
                        constitution: Number(this.state.constitution) + 1,
                        intelligence: Number(this.state.intelligence) + 1,
                        wisdom: Number(this.state.wisdom) + 1,
                        charisma: Number(this.state.charisma) + 1
                    }, () => {
                        this.createCharacter();
                    });
                    break;
                case "Hill Dwarf":
                    this.setState({
                        constitution: Number(this.state.constitution) + 2,
                        wisdom: Number(this.state.wisdom) + 1
                    }, () => {
                        this.createCharacter();
                    });
                    break;
                case "Mountain Dwarf":
                    this.setState({
                        constitution: Number(this.state.constitution) + 2,
                        strength: Number(this.state.strength) + 2
                    }, () => {
                        this.createCharacter();
                    });
                    break;
                case "High Elf":
                    this.setState({
                        dexterity: Number(this.state.dexterity) + 2,
                        intelligence: Number(this.state.intelligence) + 1
                    }, () => {
                        this.createCharacter();
                    });
                    break;
                case "Wood Elf":
                    this.setState({
                        dexterity: Number(this.state.dexterity) + 2,
                        wisdom: Number(this.state.wisdom) + 1
                    }, () => {
                        this.createCharacter();
                    });
                    break;
                case "Dark Elf":
                    this.setState({
                        dexterity: Number(this.state.dexterity) + 2,
                        charisma: Number(this.state.charisma) + 1
                    }, () => {
                        this.createCharacter();
                    });
                    break;
                case "Lightfoot Halfling":
                    this.setState({
                        dexterity: Number(this.state.dexterity) + 2,
                        charisma: Number(this.state.charisma) + 1
                    }, () => {
                        this.createCharacter();
                    });
                    break;
                case "Stout Halfling":
                    this.setState({
                        dexterity: Number(this.state.dexterity) + 2,
                        constitution: Number(this.state.charisma) + 2
                    }, () => {
                        this.createCharacter();
                    });
                    break;
                case "Dragonborn":
                    this.setState({
                        strength: Number(this.state.strength) + 2,
                        charisma: Number(this.state.charisma) + 2
                    }, () => {
                        this.createCharacter();
                    });
                    break;
                case "Forest Gnome":
                    this.setState({
                        intelligence: Number(this.state.intelligence) + 2,
                        dexterity: Number(this.state.dexterity) + 1
                    }, () => {
                        this.createCharacter();
                    });
                    break;
                case "Rock Gnome":
                    this.setState({
                        intelligence: Number(this.state.intelligence) + 2,
                        constitution: Number(this.state.constitution) + 1
                    }, () => {
                        this.createCharacter();
                    });
                    break;
                case "Half-Orc":
                    this.setState({
                        strength: Number(this.state.strength) + 2,
                        constitution: Number(this.state.constitution) + 1
                    }, () => {
                        this.createCharacter();
                    });
                    break;
                case "Tiefling":
                        this.setState({
                            intelligence: Number(this.state.intelligence) + 1,
                            charisma: Number(this.state.charisma) + 2
                        }, () => {
                            this.createCharacter();
                        });
                        break;
                default:
                        break;
            }
        }
    }

    render(){
        return (
            <div>
                <CharacterCreationForm pullData={this.pullData} handleInputChange={this.handleInputChange} points={this.state.points}/>
            </div>
        )
    }
}

export default CharacterCreation;