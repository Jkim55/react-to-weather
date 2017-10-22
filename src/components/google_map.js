import React, {Component} from 'react'

class GoogleMap extends Component {
  componentDidMount(){
    new google.maps.Map(this.refs.map, {  // `new google.map.Map` is how we create a new embedded google map inside our component
      zoom:12,                            // this.refs: how interaction is managed w/3rd party libraries that have no idea how to play with React
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render () {
    return <div ref="map" />  // ref system in react; get a reference to an HTML element that has been rendered to the page
  }                           // With with this.refs.map, we have direct access to this html element anywhere within this component
}

export default GoogleMap
