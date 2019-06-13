import React, { Component } from "react";
import API from "../utils/API";

class Character extends Component {
    state = {
        creator_name: "",
        creator_id: "",
        id: this.props.match.params.id,
        character: {}
    }

    componentDidMount() {
        this.click();
    }

    isSignedIn = () => {
        const isLoggedIn = localStorage.getItem("userName");
        if (isLoggedIn && localStorage.getItem("userName") === this.state.creator_name) {
          return <div className="text-center">
            <button className="btn-primary" onClick={this.delete}>Delete</button>
          </div>;
        }
      }

    // This needs the correct ID
    click = () => {
        API.getCharacter(this.props.match.params.id)
            .then(res => {    
                this.setState({character: res.data})
            })
            .catch(err => console.log(err));
        API.getCharacter(this.props.match.params.id)
            .then(res => {
                API.getUser({_id: res.data.creator})
                    .then(res => {
                        console.log(res.data)
                        this.setState({
                        creator_name: res.data.username,
                        creator_id: res.data._id
                        })
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    delete = () => {
        const request_user = localStorage.getItem('userId');
        if(request_user === this.state.creator_id){
            API.deleteCharacterById(
                this.props.match.params.id,
                localStorage.getItem('token')
                )
                .then(res => {
                    this.setState({character: res.data})
                    window.location.assign('/characters')
                })
                .catch(err => console.log(err));

        } else {
            alert("Not the right credentials");
        }
    }

    list = () => {
        console.log(this.state.character)
    }

    render() {
        return (
            <div className="mb-2">
                <div className="container">
                    <div className="row mt-2 mb-2">
                        <div className="col-lg-12 text-center">
                            Creator:                     
                            <a href={`/user/${this.state.creator_id}`}><h4>{this.state.creator_name}</h4></a>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-2">
                            <h1>{this.state.character.name}</h1>
                            Character Name 
                        </div>
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-sm-6 text-center">
                                    <strong>Race: </strong>
                                    {this.state.character.race}
                                </div>
                                <div className="col-sm-6 text-center">
                                    <strong>Class: </strong>
                                    {this.state.character.class}
                                </div>
                                <div className="col-sm-6 text-center">
                                    <strong>Background: </strong>
                                    {this.state.character.background}
                                </div>
                                <div className="col-sm-6 text-center">
                                    <strong>Alignment: </strong>
                                    {this.state.character.alignment}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="row mt-3">
                                <div className="col-sm-4 text-center">
                                    <h5>Strength</h5>
                                    {this.state.character.strength}
                                </div>
                                <div className="col-sm-4 text-center">
                                    <h5>Dexterity</h5>
                                    {this.state.character.dexterity}
                                </div>
                                <div className="col-sm-4 text-center">
                                    <h5>Constitution</h5>
                                    {this.state.character.constitution}
                                </div>
                                <div className="col-sm-4 text-center">
                                    <h5>Intelligence</h5>
                                    {this.state.character.intelligence}
                                </div>
                                <div className="col-sm-4 text-center">
                                    <h5>Wisdom</h5>
                                    {this.state.character.wisdom}
                                </div>
                                <div className="col-sm-4 text-center">
                                    <h5>Charisma</h5>
                                    {this.state.character.charisma}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row mt-3">
                                <div className="col-lg-6">
                                    <h5>Personality Trait</h5>
                                    <p>{this.state.character.personalityTrait}</p>
                                </div>
                                <div className="col-lg-6">
                                    <h5>Ideals</h5>
                                    <p>{this.state.character.ideals}</p>
                                </div>
                                <div className="col-lg-6">
                                    <h5>Bonds</h5>
                                    <p>{this.state.character.bonds}</p>
                                </div>
                                <div className="col-lg-6">
                                    <h5>Flaws</h5>
                                    <p>{this.state.character.flaws}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h6>Appearance Description: </h6>
                            <p>
                                {this.state.character.appearance}
                            </p>
                        </div>
                        <div className="col-lg-12">
                            <h6>Origin Story: </h6>
                            <p>
                                {this.state.character.origin}
                            </p>
                        </div>
                    </div>
                </div>
                {this.isSignedIn()}
            </div>
        )
    }
}

export default Character;