import React, { Component } from "react";
// import API from "../utils/API";

class Home extends Component {
    state = {
    }

    signIn = () => {
        window.location.assign('/login')
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1>Welcome to Cryptic Messa</h1>
                            <h6>Are you a new or returning adventurer?</h6>
                            <div className="row">
                                <div className="col-lg-5"></div>
                                <div className="col-lg-2 mt-3">
                                    <button className="btn-primary" onClick={this.signIn}>
                                        <h3>New</h3>
                                        (new user)
                                    </button>
                                </div>
                                <div className="col-lg-5"></div>
                                <div className="col-lg-5"></div>
                                <div className="col-lg-2 mt-3">
                                    <button className="btn-primary" onClick={this.signIn}>
                                        <h3>Returning</h3>
                                        (login)
                                    </button>
                                </div>
                                <div className="col-lg-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;