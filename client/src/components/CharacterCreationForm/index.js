import React from "react";
// import "./style.css";

function CharacterCreationForm(props) {
    return (
        <div>
            <div className="container">
              <div className="row">
                {/* Identification */}
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Name</span>
                    </div>
                    <input type="text" onChange={props.handleInputChange} id="name" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Level</span>
                    </div>
                    <input type="text" onChange={props.handleInputChange} id="level" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Race</span>
                    </div>
                    <input type="text" onChange={props.handleInputChange} id="race" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Class</span>
                    </div>
                    <input type="text" onChange={props.handleInputChange} id="class" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Background</span>
                    </div>
                    <input type="text" onChange={props.handleInputChange} id="background" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Alignment</span>
                    </div>
                    <input type="text" onChange={props.handleInputChange} id="alignment" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
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
                      <input type="text" onChange={props.handleInputChange} id="strength" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Dexterity
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">DEX</span>
                      </div>
                      <input type="text" onChange={props.handleInputChange} id="dexterity" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Constitution
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">CON</span>
                      </div>
                      <input type="text" onChange={props.handleInputChange} id="constitution" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Intelligence
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">INT</span>
                      </div>
                      <input type="text" onChange={props.handleInputChange} id="intelligence" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Wisdom
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">WIS</span>
                      </div>
                      <input type="text" onChange={props.handleInputChange} id="wisdom" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Charisma
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">CHA</span>
                      </div>
                      <input type="text" onChange={props.handleInputChange} id="charisma" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
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
                        <textarea className="form-control" onChange={props.handleInputChange} id="personalityTrait" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6">Ideals
                      <div className="input-group">
                        {/* <div className="input-group-prepend">
                          <span className="input-group-text">With textarea</span>
                        </div> */}
                        <textarea className="form-control" onChange={props.handleInputChange} id="ideals" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6">Bonds
                      <div className="input-group">
                        {/* <div className="input-group-prepend">
                          <span className="input-group-text">With textarea</span>
                        </div> */}
                        <textarea className="form-control" onChange={props.handleInputChange} id="bonds" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6">Flaws
                      <div className="input-group">
                        {/* <div className="input-group-prepend">
                        Here
                          <span className="input-group-text">With textarea</span>
                        </div> */}
                        <textarea className="form-control" onChange={props.handleInputChange} id="flaws" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" onClick={props.pullData} className="btn btn-primary">Primary</button>
        </div>
    );
}

export default CharacterCreationForm;
  
