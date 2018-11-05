import React, { Component } from 'react'
import axios from 'axios'

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
    const {search} = this.state
    const {state, update} = this.props
    axios.get(`http://localhost:3000/designers?q=${search}`)
      .then(res => {
        const {data} = res
        state.designer = data[0]
        update(state)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return <div className='search'>
      <div>
        <input type='text' onChange={e => this.updateSearch(e.target.value)} className='search__input' />
        <button onClick={() => this.query()}>Search</button>
      </div>
    </div>
  }
}

export { Search }
