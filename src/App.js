import React, { Component } from "react";
import franceDepartement from "./france-departments.json"
import MapDisplay from "./MapDisplay"
import './App.css'

class App extends Component {
  render() {
    return(
      <div className="App">
        <MapDisplay carte={franceDepartement} />
      </div>
    )
  }
}

export default App;
