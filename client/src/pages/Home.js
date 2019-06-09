import React, { Component } from "react";
import HomeContent from "../components/Home";

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
                <HomeContent login={this.login} signup={this.signup}/>
            </div>
        )
    }
}

export default Home;