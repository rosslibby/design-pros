import React, { Component } from 'react'
import Toggle from './Toggle'
import Input from './Input'
import axios from 'axios'
import './search.scss'

export default class Search extends Component {
  constructor () {
    super ()

    this.state = {
      visible: false,
      search: '',
      data: {}
    }
  }

  updateSearch (search) {
    this.setState({ search })
  }

  updateVisibility (visible) {
    this.setState({ visible })
  }

  query (search) {
    const { state, update } = this.props
    // todo: this should NOT be hardcoded -- get endpoint from ENV
    axios.get(`http://design-pro-api.herokuapp.com/designers?q=${search}`)
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
    const { visible } = this.state
    return <div className='search'>
      <Toggle update={visible => this.updateVisibility(visible)} visible={this.state.visible} />
      <Input
        update={search => this.updateSearch(search)}
        visible={visible}
        query={(search) => this.query(search)} />
    </div>
  }
}
