import React, { Component } from "react";

class MapDisplay extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    let elements = this.props.carte.regions.map(function(i) {
      let elements_region = i.layers.map(item =>
        <g key={item.id} className="departement">
          <path className="departement" d={item.d} onMouseEnter={() => console.log(item.name)}>
          </path>
        </g>
      )

      return <g key={i.id} className="region">{elements_region}</g>
    })
//      (console.log(i.name), i.layers.map(item =>
//
//      )    ))

    return(
      <svg xmlns="http://www.w3.org/2000/svg"
     width="500" height="500" viewBox={this.props.carte.viewBox}>
     {elements}
      </svg>
    )
  }
}

export default MapDisplay;
