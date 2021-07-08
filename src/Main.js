import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import About from "./About.js";
import NewAirTableForm from "./newAirTableForm.js";

function Main() {
  return (
    <div>

<nav className="navbar is-transparent" role="navigation" aria-label="main navigation">

  <div className="navbar-menu is-active">
    < div className="navbar-end">
      <div className="navbar-item">
        <Link to="/">
            Dashboard
          </Link>
      </div>

      <div className="navbar-item">
      <Link className="navbar-item" to="/newURL">
            New URL?
          </Link>
      </div>
      <div className="navbar-item">
      <Link className="navbar-item" to="/about">
            About
          </Link>
      </div>
    </div>
    </div>
</nav>
      <main>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/newURL">
          <NewAirTableForm />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Redirect to="/" />
      </main>
    </div>
  );
}

export default Main;
