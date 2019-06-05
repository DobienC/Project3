import React, { Component } from "react";
import API from "../utils/API";

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
            alert("Password must be matching");
        } else {
            API.signup(this.state)
                .then(res => {
                    API.login(this.state)
                        .then(newRes => {
                            localStorage.setItem("userName", this.parseJwt(newRes.data.token).username);
                            localStorage.setItem("userId", this.parseJwt(newRes.data.token).id)
                            localStorage.setItem("token", newRes.data.token);
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
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h1>Signup</h1>
                        </div>
                        <div className="col-lg-12 mt-2">
                            Username:
                            <input
                                className="ml-1"
                                type="text"
                                value={this.state.username}
                                label="email"
                                onChange={this.onChange('username')}
                            />
                        </div>
                        <div className="col-lg-12 mt-2">
                            Email: 
                            <input
                                className="ml-1"
                                type="text"
                                value={this.state.email}
                                label="email"
                                onChange={this.onChange('email')}
                            />
                        </div>
                        <div className="col-lg-12 mt-2">
                            Password: 
                            <input
                                className="ml-1"
                                type="password"
                                value={this.state.password}
                                label="password"
                                onChange={this.onChange('password')}
                            />
                        </div>
                        <div className="col-lg-12 mt-2">
                            Verify Password: 
                            <input
                                className="ml-1"
                                type="password"
                                value={this.state.checker}
                                label="password"
                                onChange={this.onChange('checker')}
                            />
                        </div>
                        <div className="col-lg-12 mt-2">
                            <h6>{this.state.message}</h6>
                        </div>
                        <div className="col-lg-12">
                            <button
                                className="btn-primary mt-4"    
                                onClick={this.completeForm}
                                disabled={!Boolean(this.state.email && this.state.password && this.state.checker)}
                                >
                                Signup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;