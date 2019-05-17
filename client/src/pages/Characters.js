import React, { Component } from "react";
import API from "../utils/API";

class Books extends Component {
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

  render() {
    return (
        <div>
            <button onClick={this.deleteAllCharacters}>Delete</button>
            <button onClick={this.createDefaultCharacter}>Add</button>
            <button onClick={this.getCharacter}>Characters</button>
            <button onClick={this.createUser}>Test Users</button>
            {/* {this.state.characters.map(item => <div>Hello</div>)} */}
            {/* {this.getCharacter()} */}
            {/* {this.state.characters.map((item) => <div>Hello</div>)} */}
            <div className="container">
              <div className="row">
                {/* Identification */}
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Name</span>
                    </div>
                    <input type="text" onChange={this.handleInputChange} id="name" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Level</span>
                    </div>
                    <input type="text" onChange={this.handleInputChange} id="level" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Race</span>
                    </div>
                    <input type="text" onChange={this.handleInputChange} id="race" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Class</span>
                    </div>
                    <input type="text" onChange={this.handleInputChange} id="class" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Background</span>
                    </div>
                    <input type="text" onChange={this.handleInputChange} id="background" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Alignment</span>
                    </div>
                    <input type="text" onChange={this.handleInputChange} id="alignment" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2">
                  <div className="col-lg-12">Strength
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">STR</span>
                      </div>
                      <input type="text" onChange={this.handleInputChange} id="strength" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Dexterity
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">DEX</span>
                      </div>
                      <input type="text" onChange={this.handleInputChange} id="dexterity" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Constitution
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">CON</span>
                      </div>
                      <input type="text" onChange={this.handleInputChange} id="constitution" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Intelligence
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">INT</span>
                      </div>
                      <input type="text" onChange={this.handleInputChange} id="intelligence" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Wisdom
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">WIS</span>
                      </div>
                      <input type="text" onChange={this.handleInputChange} id="wisdom" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Charisma
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">CHA</span>
                      </div>
                      <input type="text" onChange={this.handleInputChange} id="charisma" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-lg-6">Personality Trait
                      <div className="input-group">
                        {/* <div className="input-group-prepend">
                          <span className="input-group-text">With textarea</span>
                        </div> */}
                        <textarea className="form-control" onChange={this.handleInputChange} id="personalityTrait" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6">Ideals
                      <div className="input-group">
                        {/* <div className="input-group-prepend">
                          <span className="input-group-text">With textarea</span>
                        </div> */}
                        <textarea className="form-control" onChange={this.handleInputChange} id="ideals" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6">Bonds
                      <div className="input-group">
                        {/* <div className="input-group-prepend">
                          <span className="input-group-text">With textarea</span>
                        </div> */}
                        <textarea className="form-control" onChange={this.handleInputChange} id="bonds" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6">Flaws
                      <div className="input-group">
                        {/* <div className="input-group-prepend">
                        Here
                          <span className="input-group-text">With textarea</span>
                        </div> */}
                        <textarea className="form-control" onChange={this.handleInputChange} id="flaws" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" onClick={this.pullData} className="btn btn-primary">Primary</button>
        </div>
    )
  }
}

export default Books;
