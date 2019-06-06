import React from "react";
import "./style.css";
// import { PromiseProvider } from "mongoose";

function CharacterCard(props) {
  
  return (
    <div>
        <div className="card">
            <div className={`card-body ${props.character.class}`}>
                <h3 className="card-title text-center"><u>{props.name}</u></h3>
                <p className="card-text">
                  <section>
                    <div className="float-left">Class: <h5 className="text-center">{props.character.class}</h5></div>
                    <div className="float-right">Race: <h5 className="text-center">{props.character.race}</h5></div>
                    <br /><br /><br />
                    <div className="float-left">Background: <h5 className="text-center">{props.character.background}</h5></div>
                    <div className="float-right">Alignment: <h5 className="text-center">{props.character.alignment}</h5></div>
                  </section>
                  <br/><br/><br/>
                <div className="text-center float-center">
                  <a href={`/character/${props.id}`} className="btn btn-primary">Go to Character</a>
                </div>
                </p>
            </div>
        </div>
    </div>
  );
}

export default CharacterCard;
