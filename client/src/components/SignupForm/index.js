import React from "react";
import "./style.css";

function SignupForm(props) {

    return(
        <div className="container mt-3">
            <div className="row text-center">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 login-form">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Signup</h1>
                        </div>
                        <div className="col-lg-12 mt-2">
                            Username:
                            <input
                                className="ml-1"
                                type="text"
                                value={props.username}
                                label="email"
                                onChange={props.onChange('username')}
                            />
                        </div>
                        <div className="col-lg-12 mt-2">
                            Email: 
                            <input
                                className="ml-1"
                                type="email"
                                value={props.email}
                                label="email"
                                onChange={props.onChange('email')}
                            />
                        </div>
                        <div className="col-lg-12 mt-2">
                            Password: 
                            <input
                                className="ml-1"
                                type="password"
                                value={props.password}
                                label="password"
                                onChange={props.onChange('password')}
                            />
                        </div>
                        <div className="col-lg-12 mt-2">
                            Verify Password: 
                            <input
                                className="ml-1"
                                type="password"
                                value={props.checker}
                                label="password"
                                onChange={props.onChange('checker')}
                            />
                        </div>
                        <div className="col-lg-12 mt-2">
                            <h6>{props.message}</h6>
                        </div>
                        <div className="col-lg-12">
                            {/* <h5 className="text-center">{props.message}</h5>  */}
                            <button
                                className="btn-primary mt-2 mb-2"    
                                onClick={props.completeForm}
                                disabled={!Boolean(props.email && props.password && props.checker)}
                                >
                                Signup
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
        );
}
            
export default SignupForm;