import React from 'react'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    _onKeyUp(e) {
        e.preventDefault();

        console.log(e);
    }

    render() {
        return (
            <main class="home" onKeyUp={this._onKeyUp}>Honey, I'm home</main>
        )
    }
}