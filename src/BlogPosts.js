import React, { Component } from 'react';
import './App.css';

export class BlogPosts extends Component {


    constructor() {
        super();

        this.state = {
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        if (this.state.clicked === false) {
            const newState = true
            this.setState({ clicked: newState })
        } else {
            const newState = false
            this.setState({ clicked: newState })
        }

    }

    render() {
        let button = null;
        if (!this.state.clicked) {
            button = (
                <button onClick={this.handleClick} className="postfromapi">
                    <h2>{this.props.post.Titel}</h2>
                    <p>{this.props.post.Datum}</p>
                    <p>{this.props.post.Kategori}</p>
                </button>
            )
        } else {
            button = (
                <button onClick={this.handleClick} className="postfromapiextended">
                    <h2>{this.props.post.Titel}</h2>
                    <p>{this.props.post.Bloggtext}</p>
                    <p>Datum: {this.props.post.Datum}</p>
                    <p>Användare: {this.props.post.Forfattare}</p>
                    <p>Kategori: {this.props.post.Kategori}</p>
                </button>
            )
        }
        return (
            <div className="postfromapiwrapper">{button}</div>
        );
    }
}
