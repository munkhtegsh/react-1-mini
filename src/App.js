import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    };

    this.updateName = this.updateName.bind(this);
    this.updatePicture = this.updatePicture.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  updatePicture(e) {
    this.setState({picture: e.target.value});
  }

  updateName(e) {
    this.setState({name: e.target.value});
  }

  addFriend() {
    let friends = this.state.friends.slice();
    friends.push({name: this.state.name, picture: this.state.picture});
    this.setState({friends})
    console.log(this.state.friend)
  }

  render() {

    const friends = this.state.friends.map(friend => {
      return (
        <div>
          <img width="100px" src={friend.picture} alt="picture"/>
          <p>{friend.name}</p>
      </div>
      )
    });

    return (
      <div className="App">
        Picture: <input type="text" onChange={this.updatePicture}/>
        Name: <input type="text" onChange={this.updateName}/>
        <button className="AddFriend" onClick={this.addFriend} >
          Add Friend
        </button>

        {friends}
      </div>
    );
  }
}

export default App;
