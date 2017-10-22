import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'


class SearchBar extends Component {
  constructor(props) {   // To set our state up: iniitalize state inside constructor
    super(props)
    this.state = { term: '' }  //term will be mapped to state; default empty string
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)

  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event){
    event.preventDefault()
    //this calls the action creator fetchWeather, which fetches the weather data
    this.props.fetchWeather(this.state.term)
    this.setState({term:''})
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Get a five day forecast in your five favorite cities'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'> Submit </button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
