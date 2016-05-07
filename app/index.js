import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'

require('./style.css');

const header = {
    text: 'CoderDojo Veberöd'
};

const mentors = [
    {
        name: 'Balázs Suhajda',
        id: 1,
        photo: 'https://avatars1.githubusercontent.com/u/22754?v=3&s=460',
        job: 'webbutvecklare',
        hobby: 'cykling, bygga saker med elektronik'
    }
];

const data = { header, mentors };

ReactDOM.render(<Main data={data} />, document.getElementById('app'));
