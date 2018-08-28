import React, { Component } from 'react';
import './App.css';
import { BlogPosts } from "./BlogPosts";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      blogposts: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8090/api/collections/get/cockpitReactApp?token=account-6f954a3e3efeca150661a4b3f776cc')
      .then(collection => collection.json())
      .then(collection => {
        const newState = collection.entries;
        this.setState({ blogposts: newState });
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Dellros Simple Forum</h1>
        <div>
          <div id="postheader">
            <h2>Artikel</h2>
            <p>Datum</p>
            <p>Kategori</p>
          </div>
          {this.state.blogposts.map((post, index) => (
            <BlogPosts key={index} post={post} />)
          )}

        </div>
      </div>
    );
  }
}

export default App;
