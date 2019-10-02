import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import Header from '../components/Header/Header'

export class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <div className="container">
            <div className="content">
              {this.props.children}
            </div>
          </div>
      </div>
    )
  }
}

export default App
