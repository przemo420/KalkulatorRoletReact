import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Preview } from './components/Preview'
import Blind from './components/Blind'
import { getAllUsers, createUser } from './services/UserService'

class App extends Component {

  createUser = (e) => {
      createUser(this.state.user)
        .then(response => {
          console.log(response);
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
      });
  }

  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }

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