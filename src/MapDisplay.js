import React, { Component } from "react";

class MapDisplay extends Component {
  render() {
    let elements = null; // declare elements?

      if (this.props.carte.maplevel === "2") {
        elements = this.props.carte.regions.map(function(i) {
          let elements_region = i.layers.map(item =>
            <g key={item.id} className="departement" onMouseEnter={() => this.props.handleHover(item.name, 'departement')} onClick={() => this.props.handleClick(item.name, 'departement')}>
              <path d={item.d}>
              </path>
            </g>
          )

          return <g key={i.id} className="region" onMouseEnter={() => this.props.handleHover(i.name, 'region')} onClick={() => this.props.handleClick(i.name, 'region')}>{elements_region}</g>
        }, this)
      }


//      (console.log(i.name), i.layers.map(item =>
//
//      )    ))

    return(
      <svg xmlns="http://www.w3.org/2000/svg"
        width={this.props.width}
        height={this.props.height}
        viewBox={this.props.carte.viewBox}
      >
     {elements}
      </svg>
    )
  }
}

export default MapDisplay;
