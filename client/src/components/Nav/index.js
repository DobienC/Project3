import React from "react";

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
        <h6>User: <u>{localStorage.getItem("userName")}</u></h6>
        <button onClick={logout}>Sign Out</button>
      </div>;
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="row">
        <div className="col-lg-12">
          <a className="navbar-brand" href="/">
            <h1><u>D&D Finder</u></h1>
          </a>
          <a className="navbar-brand" href="/characters">
            <h6>Find Characters</h6>
          </a>
          <a className="navbar-brand" href="/characterCreation">
            <h6>Create Characters</h6>
          </a>
          {isSignedIn()}
        </div>
      </div>
      {/* <div className="text-right"> */}
      {/* </div> */}
    </nav>
  );
}

export default Nav;
