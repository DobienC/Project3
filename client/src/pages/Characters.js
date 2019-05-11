import React, { Component } from "react";
import API from "../utils/API";

class Books extends Component {
  state = {
    characters: []
  };

  // Character stuff
  getCharacter = () => {
    API.getCharacters()
      .then(res => 
        // this.setState({characters: res.data})
        console.log(res.data)
        //this.setState({characters: res.data})
      )
      .catch(err => console.log(err));
  }

  createDefaultCharacter = () => {
    API.createDefaultCharacter({})
      .then(res => 
        // this.setState({characters: res})
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
        // this.setState({characters: res})
        console.log(res.data)
      )
      .catch(err => console.log(err));
  }

  render() {
    // this.createCharacter();
    // this.getCharacter();
    // this.deleteAllCharacters();
    return (
        <div>
            <button onClick={this.deleteAllCharacters}>Delete</button>
            <button onClick={this.createDefaultCharacter}>Add</button>
            <button onClick={this.getCharacter}>Characters</button>
            <button onClick={this.createUser}>Test Users</button>
            {/* {this.state.characters.map(item => <div>Hello</div>)} */}
            {/* {this.getCharacter()} */}
            {this.state.characters.map((item) => <div>Hello</div>)}
            <div className="container">
              <div className="row">
                
                {/* Identification */}
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Level</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Race</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Class</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Background</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Alignment</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="col-lg-12">Strength
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">STR</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Dexterity
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">DEX</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Constitution
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">CON</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Intelligence
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">INT</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Wisdom
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">WIS</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Charisma
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">CHA</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-3">Personality Trait
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">With textarea</span>
                        </div>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-3">Ideals
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">With textarea</span>
                        </div>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-3">Bonds
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">With textarea</span>
                        </div>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-3">Flaws
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">With textarea</span>
                        </div>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
  }
}

export default Books;
