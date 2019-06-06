import React, { Component } from "react";
import API from "../utils/API";
import LoginForm from "../components/LoginForm";

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
                localStorage.setItem("userId", this.parseJwt(res.data.token).id);
                window.location.assign('/characters');
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
                <LoginForm email={this.state.email} password={this.state.password} message={this.state.message} onSubmit={this.onSubmit} onChange={this.onChange}/>
            </div>
        )
    }
}

export default Login;