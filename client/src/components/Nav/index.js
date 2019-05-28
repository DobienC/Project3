import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand mr-5" href="/">
        <h1><u>D&D Finder</u></h1>
      </a>
      <a className="navbar-brand" href="/characters">
        <h6>Find Characters</h6>
      </a>
      <a className="navbar-brand" href="/characterCreation">
        <h6>Create Characters</h6>
      </a>
    </nav>
  );
}

export default Nav;
