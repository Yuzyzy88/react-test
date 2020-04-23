import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import takeImg from "../take.png";

class Homepage extends Component {
    render() {
        return (
            <div>
                <h2>Welcome To Ouvie Site</h2>
                <p> Ouvie provided a lot of films</p>

                <div className="image">
                    <img src={takeImg} />
                    <p>Without Movie You Feel Blah</p>
                </div>
            </div>
        );
    }
}
export default Homepage;