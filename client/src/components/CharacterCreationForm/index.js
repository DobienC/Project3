import React from "react";
import "./style.css";

function CharacterCreationForm(props) {

  function isSignedIn() {
    const isLoggedIn = localStorage.getItem("userName");
    if (!isLoggedIn) {
      return <div className="text-center">
        <h2>Warning: Must be signed in to create a character</h2>
      </div>;
    } else {
      return <div className="text-center mt-1 mb-1">
        <h1><u>Character Sheet</u></h1>
      </div>
    }
  }

    return (
        <div>
            <div className="container cc-form mt-3">
              {isSignedIn()}
              <div className="row mt-3">
                <div className="col-lg-2"></div>
                <div className="col-lg-2">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Name</span>
                    </div>
                    <input type="text" onChange={props.handleInputChange} id="name" placeholder="Villager" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Race</span>
                    </div>
                    <select name="race" id="race" onChange={props.handleInputChange}>
                      <option value=""></option>
                      <option value="Hill Dwarf">Dwarf (Hill)</option>
                      <option value="Mountain Dwarf">Dwarf (Mountain)</option>
                      <option value="High Elf">Elf (High)</option>
                      <option value="Wood Elf">Elf (Wood)</option>
                      <option value="Dark Elf">Drow (Dark Elf)</option>
                      <option value="Lightfoot Halfling">Halfling (Lightfoot)</option>
                      <option value="Stout Halfling">Halfling (Stout)</option>
                      <option value="Human">Human</option>
                      <option value="Dragonborn">Dragonborn</option>
                      <option value="Forest Gnome">Gnome (Forest)</option>
                      <option value="Rock Gnome">Gnome (Rock)</option>
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
                <div className="col-lg-3"></div>
                <div className="col-lg-4">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Background</span>
                    </div>
                    <input type="text" onChange={props.handleInputChange} placeholder="Commoner" id="background" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Alignment</span>
                    </div>
                    <select name="alignment" id="alignment" onChange={props.handleInputChange}>
                      <option value=""></option>
                      <option value="Lawful Good">Lawful Good (LG)</option>
                      <option value="Neutral Good">Neutral Good (NG)</option>
                      <option value="Chaotic Good">Chaotic Good (CG)</option>
                      <option value="Lawful Neutral">Lawful Neutral (LN)</option>
                      <option value="Neutral">Neutral (N)</option>
                      <option value="Chaotic Neutral">Chaotic Neutral (CN)</option>
                      <option value="Lawful Evil">Lawful Evil (LE)</option>
                      <option value="Neutral Evil">Neutral Evil (NE)</option>
                      <option value="Chaotic Evil">Chaotic Evil (CE)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="col-lg-12 text-center">
                    <h5>Available Points</h5>
                    <h5>{props.points}</h5>
                    <h6>Stats must be in range of 8-15</h6>
                  </div>
                  <div className="col-lg-12"><strong>Strength</strong>
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">STR</span>
                      </div>
                      <input type="number" min="8" max="15" defaultValue="8" step="1" onChange={props.handleInputChange} id="strength" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12"><strong>Dexterity</strong>
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">DEX</span>
                      </div>
                      <input type="number" min="8" max="15" defaultValue="8" onChange={props.handleInputChange} id="dexterity" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12"><strong>Constitution</strong>
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">CON</span>
                      </div>
                      <input type="number" min="8" max="15" defaultValue="8" onChange={props.handleInputChange} id="constitution" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12"><strong>Intelligence</strong>
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">INT</span>
                      </div>
                      <input type="number" min="8" max="15" defaultValue="8" onChange={props.handleInputChange} id="intelligence" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12"><strong>Wisdom</strong>
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">WIS</span>
                      </div>
                      <input type="number" min="8" max="15" defaultValue="8" onChange={props.handleInputChange} id="wisdom" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                  <div className="col-lg-12"><strong>Charisma</strong>
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">CHA</span>
                      </div>
                      <input type="number" min="8" max="15" defaultValue="8" onChange={props.handleInputChange} id="charisma" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-6"><strong>Personality Trait</strong>
                      <div className="input-group">
                        <textarea className="form-control" onChange={props.handleInputChange} id="personalityTrait" aria-label="With textarea" rows="5"
                        placeholder="Personality traits might describe the things your character likes, his or her past accomplishments, things your character dislikes or fears, your character’s self-attitude or mannerisms, or the influence of his or her ability scores."></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6"><strong>Ideals</strong>
                      <div className="input-group">
                        <textarea className="form-control" onChange={props.handleInputChange} id="ideals" aria-label="With textarea" rows="5"
                        placeholder="Ideals might answer any of these questions: What are the principles that you will never betray? What would prompt you to make sacrifices? What drives you to act and guides your goals and ambitions? What is the single most important thing you strive for?"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6"><strong>Bonds</strong>
                      <div className="input-group">
                        <textarea className="form-control" onChange={props.handleInputChange} id="bonds" aria-label="With textarea" rows="5"
                        placeholder="Bonds might answer any of these questions: Whom do you care most about? To what place do you feel a special connection? What is your most treasured possession?"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6"><strong>Flaws</strong>
                      <div className="input-group">
                        <textarea className="form-control" onChange={props.handleInputChange} id="flaws" aria-label="With textarea" rows="5"
                        placeholder="Your character’s flaw represents some vice, compulsion, fear, or weakness—in particular, anything that someone else could exploit to bring you to ruin or cause you to act against your best interests. More significant than negative personality traits, a flaw might answer any of these questions: What enrages you? What’s the one person, concept, or event that you are terrified of? What are your vices?"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-3"><strong>Appearance Description</strong>
                      <div className="input-group">
                        <textarea className="form-control" onChange={props.handleInputChange} placeholder="Farmer's clothes" id="appearance" rows="5" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-3"><strong>Origin Story</strong>
                      <div className="input-group">
                        <textarea className="form-control" onChange={props.handleInputChange} placeholder="A normal Citizen" id="origin" rows="10" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mb-5 mt-2">
                <h4>{props.message}</h4>
                <button type="button" onClick={props.pullData} className="btn-primary">Create</button>
              </div>
            </div>
        </div>
    );
}

export default CharacterCreationForm;
  
