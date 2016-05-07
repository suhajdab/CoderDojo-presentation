import React from 'react'
import { Link } from 'react-router'

/**
 * Add hidden menu for navigating
 <ul role="nav">
    <li><Link to="/about">About</Link></li>
    <li><Link to="/repos">Repos</Link></li>
 </ul>
 */

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>{this.props.data.text}</header>
        )
    }
}