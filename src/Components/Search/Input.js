import React, { Component } from 'react'

export default class Input extends Component {
  constructor () {
    super ()

    this.state = { search: '' }
  }

  update (search) {
    const { update } = this.props
    this.setState({ search }, () => {
      update(search)
    })
  }

  query () {
    const { search } = this.state
    const { query } = this.props
    query(search)
  }

  render () {
    const { visible } = this.props

    return <div className={`search__input ${visible ? 'search__input--visible' : ''}`}>
      <input
        type='text'
        onChange={e => this.update(e.target.value)}
        className='search__input-text'
        onKeyUp={e => {
         if (e.keyCode === 13)
           this.query()
       }} />
      <button onClick={() => this.query()}>Search</button>
    </div>
  }
}
