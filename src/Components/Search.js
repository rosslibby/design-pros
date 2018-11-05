import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  constructor () {
    super ()

    this.state = {
      search: ''
    }
  }

  updateSearch (search) {
    this.setState({ search })
  }

  query () {
    const {search} = this.state
    axios.get(`http://localhost:3000/designers?q=${search}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return <div>
      <input type='text' onChange={e => this.updateSearch(e.target.value)} />
      <button onClick={() => this.query()}>Search</button>
    </div>
  }
}

export { Search }
