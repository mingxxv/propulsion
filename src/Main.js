import React from "react";
import { Route, Link, Redirect } from "react-router-dom"
import Dashboard from './Dashboard.js'
import About from './About.js'

function Main() {

    return (
        <div>
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/about">About</Link>
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
    )
  }
  
  export default Main