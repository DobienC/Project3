import React, { Component } from "react";
import API from "../utils/API";

class Signup extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        checker: ''
    }

    onChange = key => e => this.setState({ [key]: e.target.value });

    checkPassword = () => {
        if(this.state.password === this.state.checker){
            alert("true");
        } else {
            alert("false");
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h1>Signup</h1>
                        </div>
                        <div className="col-lg-12 float-right">
                            Username: 
                            <input
                                type="text"
                                value={this.state.username}
                                label="email"
                                onChange={this.onChange('username')}
                            />
                        </div>
                        <div className="col-lg-12 float-right">
                            Email: 
                            <input
                                type="text"
                                value={this.state.email}
                                label="email"
                                onChange={this.onChange('email')}
                            />
                        </div>
                        <div className="col-lg-12 float-right">
                            Password: 
                            <input
                                type="password"
                                value={this.state.password}
                                label="password"
                                onChange={this.onChange('password')}
                            />
                        </div>
                        <div className="col-lg-12 float-right">
                            Verify Password: 
                            <input
                                type="password"
                                value={this.state.checker}
                                label="password"
                                onChange={this.onChange('checker')}
                            />
                        </div>
                        <div className="col-lg-12">
                            <button
                                className="btn-primary"    
                                onClick={this.checkPassword}
                                disabled={!Boolean(this.state.email && this.state.password && this.state.checker)}
                                >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;