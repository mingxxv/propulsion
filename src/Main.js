import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import About from "./About.js";

function Main() {
  return (
    <div>

<nav class="navbar is-transparent" role="navigation" aria-label="main navigation">

  <div class="navbar-menu is-active">
    < div class="navbar-end">
      <div class="navbar-item">
        <Link to="/">
            Dashboard
          </Link>
      </div>

      <div class="navbar-item">
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
        <Route path="/about">
          <About />
        </Route>
        <Redirect to="/" />
      </main>
    </div>
  );
}

export default Main;
