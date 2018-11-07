import React, { Component } from 'react'

export default class Toggle extends Component {
  toggle () {
    const { update, visible } = this.props

    update(!visible)
  }

  render () {
    return <div className='search__toggle' onClick={() => this.toggle()}>
      <i className='fas fa-search' />
    </div>
  }
}
