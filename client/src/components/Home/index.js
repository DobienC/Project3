import React from "react";
import "./style.css";

function HomeContent(props) {

  return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center mt-1">
                    <h1 className="welcomeT mt-1 mb-3">Welcome to <u>Adventurers Club</u></h1>
                    <div className="row mt-1">
                        <div className="col-lg-5 mt-5">
                            <div className="row">
                                <div className="col-lg-12 mt-3 descrip">
                                    <p className="descrip-text">
                                        <strong>As a user, you can create and store your dungeons and dragons characters. 
                                        Your characters will be shared with all other users to view. Ultimately, 
                                        Adventurers Club will serve as a place for users to tap into thier inner 
                                        adventurer and spark their creativity.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-5 form mt-5">
                            <div className="row">
                                <div className="col-lg-12 mt-3">
                                    <h6 className="mb-4">Are you a new or returning adventurer?</h6>
                                    <button className="btn-primary" onClick={props.signup}>
                                        <h3>New Adventurer</h3>
                                        (new user)
                                    </button>
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <button className="btn-primary" onClick={props.login}>
                                        <h3>Returning</h3>
                                        (login)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12 text-center">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}

export default HomeContent;
