import React, { Component } from "react";

class Home extends Component {
    state = {
    }

    login = () => {
        window.location.assign('/login')
    }

    signup = () => {
        window.location.assign("/signup")
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
                                    <button className="btn-primary" onClick={this.signup}>
                                        <h3>New Adventurer</h3>
                                        (new user)
                                    </button>
                                </div>
                                <div className="col-lg-5"></div>
                                <div className="col-lg-5"></div>
                                <div className="col-lg-2 mt-3">
                                    <button className="btn-primary" onClick={this.login}>
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