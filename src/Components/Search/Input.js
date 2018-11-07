import React, { Component } from 'react'

export default class Input extends Component {
  constructor () {
    super ()

    this.state = { search: '' }
  }

  updateSearch (search) {
    this.setState({ search })
  }

  render () {
    return <input
      type='text'
      onChange={e => this.updateSearch(e.target.value)}
      className='search__input' />
  }
}
