import React, { Component } from "react";
import API from "../utils/API";

class Character extends Component {
    state = {
        id: this.props.match.params.id,
        character: {}
    }

    componentDidMount() {
        this.click();
    }


    // This needs the correct ID
    click = () => {
        // console.log(this.state.character);
        API.getCharacter(this.props.match.params.id)
            // .then(res => this.setState({character: res.data}))
            .then(res => this.setState({character: res.data}))
            .catch(err => console.log(err));
    }

    list = () => {
        console.log(this.state.character)
    }

    render() {
        return (
            <div>
                Here
                <button onClick={this.click}>Get</button>
                <button onClick={this.list}>Character</button>
                <div className="container">
                    <div className="row">
                        <h1>{this.state.character.name}</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="row mt-3">
                                <div className="col-lg-4">
                                    <h5>Strength</h5>
                                    {this.state.character.strength}
                                </div>
                                <div className="col-lg-4">
                                    <h5>Dexterity</h5>
                                    {this.state.character.dexterity}
                                </div>
                                <div className="col-lg-4">
                                    <h5>Constitution</h5>
                                    {this.state.character.constitution}
                                </div>
                                <div className="col-lg-4">
                                    <h5>Intelligence</h5>
                                    {this.state.character.intelligence}
                                </div>
                                <div className="col-lg-4">
                                    <h5>Wisdom</h5>
                                    {this.state.character.wisdom}
                                </div>
                                <div className="col-lg-4">
                                    <h5>Charisma</h5>
                                    {this.state.character.charisma}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            Here
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Character;