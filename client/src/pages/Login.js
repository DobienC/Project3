import React, { Component } from "react";
import API from "../utils/API";

class Login extends Component {
    state = {
        email: '',
        password: '',
        message: ''
    }

    onChange = key => e => this.setState({ [key]: e.target.value });

    onSubmit = () => {
        API.login(this.state)
            .then(res => {
                console.log(this.parseJwt(res.data.token))
                this.setState({message: "Login Success"});
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userName", this.parseJwt(res.data.token).username);
                localStorage.setItem("userId", this.parseJwt(res.data.token).id)
            })
            .catch(err =>{
                this.setState({message: "Email/Password don't match"})
                console.log(err)
            })
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
                            <h1>Login</h1>
                        </div>
                        <div className="col-lg-12 mt-2">
                            Email: 
                            <input
                                className="ml-2"
                                type="text"
                                value={this.state.email}
                                label="email"
                                onChange={this.onChange('email')}
                            />
                        </div>
                        <div className="col-lg-12 mt-2">
                            Password: 
                            <input
                                className="ml-2"
                                type="password"
                                value={this.state.password}
                                label="password"
                                onChange={this.onChange('password')}
                            />
                        </div>
                        <div className="col-lg-12 mt-2">
                            <h6>{this.state.message}</h6>
                        </div>
                        <div className="col-lg-12 mt-3">
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