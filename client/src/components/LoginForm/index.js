import React from "react";
import "./style.css";

function LoginForm(props) {

    return(
        <div className="container mt-3">
            <div className="row text-center login-form">
                <div className="col-lg-12">
                    <h1>Login</h1>
                </div>
                <div className="col-lg-12 mt-2">
                    Email: 
                    <input
                        className="ml-2"
                        type="text"
                        value={props.email}
                        label="email"
                        onChange={props.onChange('email')}
                    />
                </div>
                <div className="col-lg-12 mt-2">
                    Password: 
                    <input
                        className="ml-2"
                        type="password"
                        value={props.password}
                        label="password"
                        onChange={props.onChange('password')}
                    />
                </div>
                <div className="col-lg-12 mt-2">
                    <h6>{props.message}</h6>
                </div>
                <div className="col-lg-12 mt-3">
                    <button
                        className="btn-primary"    
                        onClick={props.onSubmit}
                        disabled={!Boolean(props.email && props.password)}
                        >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;