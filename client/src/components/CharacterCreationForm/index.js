import React from "react";
// import "./style.css";

function CharacterCreationForm(props) {
    return (
        <div>
            <div className="container mt-3">
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
                <div className="col-lg-3">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Race</span>
                    </div>
                    <select name="race" id="race" onChange={props.handleInputChange}>
                      <option value=""></option>
                      <option value="Human">Human</option>
                      <option value="Hill Dwarf">Hill Dwarf</option>
                      <option value="Mountain Dwarf">Mountain Dwarf</option>
                      <option value="High Elf">High Elf</option>
                      <option value="Wood Elf">Wood Elf</option>
                      <option value="Dark Elf">Dark Elf (Drow)</option>
                      <option value="Lightfoot Halfling">Lightfoot Halfling</option>
                      <option value="Stout Halfling">Stout Halfling</option>
                      <option value="Dragonborn">Dragonborn</option>
                      <option value="Forest Gnome">Forest Gnome</option>
                      <option value="Rock Gnome">Rock Gnome</option>
                      <option value="Half-Orc">Half-Orc</option>
                      <option value="Tiefling">Tiefling</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Class</span>
                    </div>
                    <select name="class" id="class" onChange={props.handleInputChange}>
                      <option value=""></option>
                      <option value="Barbarian">Barbarian</option>
                      <option value="Bard">Bard</option>
                      <option value="Cleric">Cleric</option>
                      <option value="Druid">Druid</option>
                      <option value="Fighter">Fighter</option>
                      <option value="Monk">Monk</option>
                      <option value="Paladin">Palidin</option>
                      <option value="Ranger">Ranger</option>
                      <option value="Rogue">Rogue</option>
                      <option value="Sorcerer">Sorcerer</option>
                      <option value="Warlock">Warlock</option>
                      <option value="Wizard">Wizard</option>
                      <option value="Blood Hunter">Blood Hunter</option>
                    </select>
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
                <div className="col-lg-3">
                  <div className="col-lg-12 text-center">
                    Available Points
                    <h5>{props.points}</h5>
                  </div>
                  <div className="col-lg-12">Strength
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">STR</span>
                      </div>
                      <input type="number" min="6" max="20" defaultValue="8" onChange={props.handleInputChange} id="strength" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Dexterity
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">DEX</span>
                      </div>
                      <input type="number" min="6" max="20" defaultValue="8" onChange={props.handleInputChange} id="dexterity" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Constitution
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">CON</span>
                      </div>
                      <input type="number" min="6" max="20" defaultValue="8" onChange={props.handleInputChange} id="constitution" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Intelligence
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">INT</span>
                      </div>
                      <input type="number" min="6" max="20" defaultValue="8" onChange={props.handleInputChange} id="intelligence" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Wisdom
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">WIS</span>
                      </div>
                      <input type="number" min="6" max="20" defaultValue="8" onChange={props.handleInputChange} id="wisdom" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12">Charisma
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">CHA</span>
                      </div>
                      <input type="number" min="6" max="20" defaultValue="8" onChange={props.handleInputChange} id="charisma" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-6">Personality Trait
                      <div className="input-group">
                        <textarea className="form-control" onChange={props.handleInputChange} id="personalityTrait" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6">Ideals
                      <div className="input-group">
                        <textarea className="form-control" onChange={props.handleInputChange} id="ideals" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6">Bonds
                      <div className="input-group">
                        <textarea className="form-control" onChange={props.handleInputChange} id="bonds" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6">Flaws
                      <div className="input-group">
                        <textarea className="form-control" onChange={props.handleInputChange} id="flaws" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-3">Appearance Description
                      <div className="input-group">
                        <textarea className="form-control" onChange={props.handleInputChange} id="appearance" rows="5" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-3">Origin Story
                      <div className="input-group">
                        <textarea className="form-control" onChange={props.handleInputChange} id="origin" rows="10" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>{props.message}here</p>
              <button type="button" onClick={props.pullData} className="btn-primary text-center">Create</button>
            </div>
        </div>
    );
}

export default CharacterCreationForm;
  
