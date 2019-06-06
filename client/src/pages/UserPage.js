import React, { Component } from "react";
import API from "../utils/API";
import CharacterCard from "../components/CharacterCard";

class UserPage extends Component {
    state = {
        creator_name: "",
        id: this.props.match.params.id,
        characters: []
    }

    componentDidMount() {
        this.pullData();
    }

    // This needs the correct ID
    pullData = () => {
        API.getUser({_id: this.state.id})
            .then(res => {
                console.log(res.data)
                this.setState({creator_name: res.data.username})
            })
            .catch(err => console.log(err));
        API.getByUser(this.state.id)
            .then(res => {
                this.setState({characters: res.data})
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className="row mt-3 mb-2">
                    <div className="col-lg-12 text-center">
                        <h2>User: <u>{this.state.creator_name}</u></h2>

                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row">
                            {this.state.characters.map(character => (
                                <div className="col-lg-4"><CharacterCard name={character.name} id={character._id} character={character}/></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPage;