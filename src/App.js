import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Main, Professional, Search } from './Components'
import './styles/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class App extends Component {
  constructor () {
    super ()

    this.state = {
      designer: {}
    }
  }

  updateDesigner (state) {
    this.setState(state, () => {
      console.log(this.state)
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
        <div className='main-content'>
          <div className='logo'>Designer Professionals</div>
          <Search
            state={this.state}
            update={(state, designer) => this.updateDesigner(state, designer)}
          />
          <header>
            <nav>
              <Link to='/'>
                <button>Home</button>
              </Link>
              <Link to='/professionals'>
                <button>Professionals</button>
              </Link>
            </nav>
          </header>
          <Route exact path='/' render={(designer) => <Main designer={this.state.designer} />} />
          <Route exact path='/professionals' component={Professional} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
