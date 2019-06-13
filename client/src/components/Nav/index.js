import React from "react";
import "./style.css";

function Nav() {

  function logout(e){
    e.preventDefault();
    localStorage.clear();
    window.location.assign("/");
  }

  function isSignedIn() {
    const isLoggedIn = localStorage.getItem("userName");
    if (isLoggedIn) {
      return <div>
        <h5>Welcome <a className="navbar-brand" href={`/user/${localStorage.getItem("userId")}`}>
          <u>{localStorage.getItem("userName")}</u></a>
          <h6 className="text-center"><button className="btn-dnd" onClick={logout}>Sign Out</button></h6>
        </h5>
      </div>;
    } else {
      return <div>
        <a className="navbar-brand" href="/login">Signin</a>
      </div>
    }
  }

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        <h1><u>Adventurers Club</u></h1>
      </a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="navbar-brand" href="/characterCreation">
            <h6>Create Characters</h6>
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="/characters">
            <h6>Explore Characters</h6>
          </a>
        </li>
      </ul>
        <span className="navbar-nav">
          {isSignedIn()}
        </span>
    </nav>
  );
}

export default Nav;
