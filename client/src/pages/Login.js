import React, { Component } from "react";
import API from "../utils/API";

class Login extends Component {
    state = {
        email: '',
        password: ''
    }



    onChange = key => e => this.setState({ [key]: e.target.value });

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h1>Login</h1>
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
                        <div className="col-lg-12">
                            <button
                                className="btn-primary"    
                                onClick={this.onSubmit}
                                disabled={!Boolean(this.state.email && this.state.password)}
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

export default Login;