import React, { Component } from 'react';
import data from '../Assets/data';
import '../App.css';

class User extends Component {
    constructor() {
        super();
        this.state = {
            data: data,
            index: 0,
            numCards: data.length
        }
    }

    next() {
        if(this.state.index === this.state.data.length - 1) {
            this.setState({ index: 0 })
        } else {
            this.setState({ index: this.state.index + 1 })
        }
    }

    previous() {
        if(this.state.index === 0) {
            this.setState({ index: this.state.data.length - 1 })
        } else {
            this.setState({ index: this.state.index - 1 })
        }
    }
    
    render() {
        return (
            <div>
                <div className="User">
                    <div id="card-numbers">
                        <h2>{this.state.index + 1}/{this.state.numCards}</h2>
                    </div>
                    <div className="name">
                        <h2>{this.state.data[this.state.index].name.first} {this.state.data[this.state.index].name.last}</h2>
                    </div>
                    <div className="state">
                        <strong>From:</strong> {this.state.data[this.state.index].city}
                    </div>
                    <div className="job-title">
                        <strong>Job Title:</strong> {this.state.data[this.state.index].title}
                    </div>
                    <div className="employer">
                        <strong>Employer:</strong> {this.state.data[this.state.index].employer}
                    </div>
                    <ol className="fav-movies">
                        <h2>Favorite Movies:</h2>
                        <li className="movie-list">{this.state.data[this.state.index].favoriteMovies[0]}</li>
                        <li className="movie-list">{this.state.data[this.state.index].favoriteMovies[1]}</li>
                        <li className="movie-list">{this.state.data[this.state.index].favoriteMovies[2]}</li>
                    </ol>
                </div>
                <div>
                    <button className="button-1" onClick={() => this.previous()}>{'< Previous '}</button>
                    <button className="button-2" onClick={() => this.next()}>{' Next >'}</button>
                </div>
            </div>
        )
    }
}

export default User;