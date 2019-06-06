import React, { Component } from "react";
import API from "../utils/API";
import SignupForm from "../components/SignupForm";

class Signup extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        checker: '',
        message: ''
    }

    onChange = key => e => this.setState({ [key]: e.target.value });

    completeForm = () => {
        if(this.state.password !== this.state.checker){
            this.setState({message: "Password must be matching"});
        } else {
            API.signup(this.state)
                .then(res => {
                    API.login(this.state)
                        .then(newRes => {
                            localStorage.setItem("userName", this.parseJwt(newRes.data.token).username);
                            localStorage.setItem("userId", this.parseJwt(newRes.data.token).id)
                            localStorage.setItem("token", newRes.data.token);
                            window.location.assign('/characters');
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
                .catch(err => {
                    console.log(err)
                })
            this.setState({message: "Signup Completed"})
        }
    }

    parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = decodeURIComponent(atob(base64Url).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(base64);
    };

    render() {
        return (
            <div>
                <SignupForm message={this.state.message} username={this.state.username} email={this.state.email} password={this.state.password} checker={this.state.checker} completeForm={this.completeForm} onChange={this.onChange} />
            </div>
        )
    }
}

export default Signup;