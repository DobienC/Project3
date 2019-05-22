import React from "react";
import "./style.css";
import { PromiseProvider } from "mongoose";

function CharacterCard(props) {
  
  return (
    <div>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={`/character/${props.id}`} className="btn btn-primary">Go to Character</a>
            </div>
        </div>
    </div>
  );
}

export default CharacterCard;
