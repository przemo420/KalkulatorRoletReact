import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Preview } from './components/Preview'
import Blind from './components/Blind'


class App extends Component {
  render() {
    return (
      <div className="row App">
          <article className="col-md-6">
            <Preview></Preview>
          </article>
          <article className="col-md-6">
            <Blind></Blind>
          </article>
      </div>
    );
  }
}

export default App;