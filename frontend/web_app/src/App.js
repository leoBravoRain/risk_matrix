import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Control_Risk from "./components/control_risk_list.component";
import Home from "./components/home.component";

// Component 
class App extends Component {

  // render method
  render() {

    return (

      <Router>

        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link to="/" className="navbar-brand"> 

              Gestión matriz de riesgo

            </Link>

            <div className="collpase navbar-collapse">

              <ul className="navbar-nav mr-auto">

                <li className="navbar-item">

                  <Link to="/" className="nav-link">

                    Inicio

                  </Link>
                 
                </li>

              </ul>

            </div>

          </nav>

        </div>

        <Route path = '/' exact component = {Home} />
        
        <Route path = '/control_risk_consult' exact component = {Control_Risk} />

      </Router>

    );

  }

}

// exporting app
export default App;