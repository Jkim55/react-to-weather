import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/graph_chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  render(){
    const weatherList = this.props.weather
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature (F) </th>
            <th> Humidity (%) </th>
            <th> Pressure (hPa) </th>
          </tr>
        </thead>
        <tbody>
          { weatherList.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }

  renderWeather(cityData){
    const name = cityData.city.name
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * (9/5) - 459.67)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/> {name} </td>
        <td><Chart data={temps} color='orange' units="F"/></td>
        <td><Chart data={humidities} color='green' units="%"/></td>
        <td><Chart data={pressures} color='black' units="hPa"/></td>
      </tr>
    )
  }
}

function mapStateToProps({weather}) {   //With mapStateToProps hooked up with weatherList on ln27, have access to this.props within WeatherList
  return { weather }  //identical to { weather: weather }
}

export default connect(mapStateToProps)(WeatherList)  //exporting the connected version of the WeatherList class;
                                                      // export default class WeatherList from ln 4  wouldn't be connected
