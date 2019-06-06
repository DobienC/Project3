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
        </h5>
        <h6><button className="btn-dnd" onClick={logout}>Sign Out</button></h6>
      </div>;
    }
  }

  return (
    <nav className="navbar ">
      <div className="row yak">
        <div className="col-lg-12">
          <a className="navbar-brand" href="/">
            <h1><u>D&D Adventurers Club</u></h1>
          </a>
          <a className="navbar-brand" href="/characters">
            <h6>Find Characters</h6>
          </a>
          <a className="navbar-brand" href="/characterCreation">
            <h6>Create Characters</h6>
          </a>
        </div>
        <div className="col-lg-12">
          {isSignedIn()}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
