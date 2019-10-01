import React, { Component } from "react";

class MapDisplay extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    let elements = this.props.carte.layers.map(item => (
      <g key={item.id}>
        <path d={item.d} onClick={() => console.log(item.name)}></path>
      </g>
    ))

    return(
      <svg xmlns="http://www.w3.org/2000/svg"
     width="500" height="500" viewBox={this.props.carte.viewBox}>
     {elements}
      </svg>
    )
  }
}

export default MapDisplay;
