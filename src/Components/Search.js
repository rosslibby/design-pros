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
    axios.get(`http://localhost:3000/designers?q=${search}`)
      .then(res => {
        this.setState({
          data: res
        })
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
