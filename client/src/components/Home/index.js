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
                                        <h3 className="mt-2">Create, share, and explore.</h3>
                                        <strong>Tap into your inner adventurer to create and inspire others with Adventurers
                                        Club. Create and store your Dungeons and Dragons characters. Share and explore other
                                        creations by other users.</strong>
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
                                <div className="col-lg-12 mt-3 mb-3">
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
                            <section>
                                <div className="container create">
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card-block ml-1 mt-3 mb-2">
                                                    <h4 className="card-title">Create</h4>
                                                    <p className="card-text">
                                                        Use the character creation tool to help bring your adventurer to life.
                                                    </p>
                                                    <p className="card-text">
                                                        The character creation tool follows the conventions from D&Ds 5th edition rules.
                                                        5th edition's point buy system is accurately integrated in the tool as well as 
                                                        racial bonus attributes. 
                                                    </p>
                                                    <p>
                                                        (must be logged in to publish characters)
                                                    </p>
                                                    <a href="/characterCreation" className="btn btn-primary">Create</a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="card-img-bottom">
                                                    <img src="../assets/images/Create.PNG"></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12 text-center">
                            <section>
                                <div className="container create">
                                    <div className="card">
                                        <div className="row">
                                            <div class="col-md-6">
                                                <div class="card-img-bottom">
                                                    <img src="../assets/images/Share.PNG"></img>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-block ml-1 mt-3 mb-2">
                                                    <h4 className="card-title">Share</h4>
                                                    <p className="card-text">
                                                        Share your adventurer's story with the world.
                                                    </p>
                                                    <p className="card-text">
                                                        All details for each character are up for display. Their story
                                                        will be stored in Adventurer Club's database and be accessible
                                                        at all times. 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-12 text-center">
                                <section>
                                    <div className="container create">
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="card-block ml-1 mt-3 mb-2">
                                                        <h4 className="card-title">Explore</h4>
                                                        <p className="card-text">
                                                            Explore the community's creations.
                                                        </p>
                                                        <p className="card-text">
                                                            All users' characters are accessible for everyone. Find a character
                                                            that can inspire your next creation. Adventurers Club is a hub for 
                                                            characters of all shapes and sizes, no matter the race, class, or background.
                                                            Maybe your character will be a big inspiration for the next adventurer. 
                                                        </p>
                                                        <a href="/characters" className="btn btn-primary mb-3">Explore</a>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="card-img-bottom">
                                                        <img src="../assets/images/Explore.PNG"></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="row mt-1">
                            {/* <div className="col-lg-5 mt-5"> */}
                                {/* <div className="row"> */}
                                    <div className="col-lg-12 mt-5 mb-3 descrip">
                                        <p className="descrip-text">
                                            <h4 className="mt-2">NOTE:</h4>
                                            <strong>
                                                Content from this page is inspired and pulled from Dungeons and Dragons 5th edition.
                                                There are free and official rules/tools from 
                                                <a href="https://dnd.wizards.com/"> Wizards of the Coast</a> and 
                                                <a href="https://www.dndbeyond.com/"> D&D Beyond</a>. Feel free to learn and explore
                                                from the original creators.
                                            </strong>
                                        </p>
                                    </div>
                                {/* </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}

export default HomeContent;
