import React, { Component } from 'react'
import { Search } from 'Components'
import './header.scss'

export default class Header extends Component {
  render () {
    const { state, update } = this.props

    return <header className='header'>
      <span className='header__title'>Designer Professionals</span>
      <div className='header__icons'>
        <Search state={state} update={update} />
      </div>
    </header>
  }
}
