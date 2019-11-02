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
    this.handleClick = this.handleClick.bind(this);
  }

  handleHover(event, type) {
    if (type === 'departement') {
      this.setState({
        departementHover: event,
      })
    } else {
      this.setState({
        regionHover: event,
      })
    }
  }

  handleClick(event, type) {
    if (type === 'region') {
      alert(event)
    } else {
    }
  }

  render() {
    return(
      <div className="App">
        <MapDisplay
          width="400"
          height="400"
          carte={franceDepartement}
          handleHover={this.handleHover}
          handleClick={this.handleClick}
        />
        <p>{this.state.regionHover ? `Région: ${this.state.regionHover}` : ''}</p>
        <p>{this.state.departementHover ? `Département: ${this.state.departementHover}` : ''}</p>
      </div>
    )
  }
}

export default App;
