import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    _onKeyUp(e) {
        e.preventDefault();

        console.log(e);
    }

    render() {
        return (
            <div>
                <Header data={this.props.data.header} />
                <Route path="/" component={App}>
                    {/* add it here, as a child of `/` */}
                    <IndexRoute component={Home}/>

                    <Route path="/repos" component={Repos}>
                        <Route path="/repos/:userName/:repoName" component={Repo}/>
                    </Route>
                    <Route path="/about" component={About}/>
                </Route>
                <Footer/>
            </div>
        )
    }
}