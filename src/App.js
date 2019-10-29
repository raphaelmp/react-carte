import React, { Component } from "react";
import franceDepartement from "./france-regions-departements.json"
import MapDisplay from "./MapDisplay"
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      regionHover: '',
      departementHover: '',
    }

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(event, type) {
    if (type == 'departement') {
      this.setState({
        departementHover: event,
      })
    } else {
      this.setState({
        regionHover: event,
      })
    }
  }

  render() {
    return(
      <div className="App">
        <MapDisplay carte={franceDepartement} handleHover={this.handleHover}/>
        <p>{this.state.regionHover ? `Région: ${this.state.regionHover}` : ''}</p>
        <p>{this.state.departementHover ? `Département: ${this.state.departementHover}` : ''}</p>
      </div>
    )
  }
}

export default App;
