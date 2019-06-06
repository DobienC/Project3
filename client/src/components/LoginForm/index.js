import React from "react";
import "./style.css";

function LoginForm(props) {

    return(
        <div className="container mt-3">
            <div className="row text-center">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="row login-form">
                        <div className="col-lg-12">
                            <h1><u>Login</u></h1>
                        </div>
                        <div className="col-lg-12 mt-2">
                            <strong>Email: </strong>
                            <input
                                className="ml-2"
                                type="email"
                                value={props.email}
                                label="email"
                                onChange={props.onChange('email')}
                            />
                        </div>
                        <div className="col-lg-12 mt-2">
                            <strong>Password: </strong>
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
                                className="btn-primary mb-2"    
                                onClick={props.onSubmit}
                                disabled={!Boolean(props.email && props.password)}
                                >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    );
}

export default LoginForm;