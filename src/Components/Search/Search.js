import React, { Component } from 'react'
import axios from 'axios'
import './search.scss'

export default class Search extends Component {
  constructor () {
    super ()

    this.state = {
      search: '',
      data: {}
    }
  }

  updateSearch (search) {
    this.setState({ search })
  }

  query () {
    const { search } = this.state
    const { state, update } = this.props
    // todo: this should NOT be hardcoded -- get endpoint from ENV
    axios.get(`http://localhost:3000/designers?1=${search}`)
      .then(res => {
        const { data } = res
        state.designer = data[0]
        update(state)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return <div className='search'>
      <input type='text' onChange={e => this.updateSearch(e.target.value)} className='search__input' />
      <button onClick={() => this.query()}>Search</button>
    </div>
  }
}
