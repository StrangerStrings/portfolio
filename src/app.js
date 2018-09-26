import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import TitleSection from './components/TitleSection'
import WelcomePage from './components/WelcomePage'
import PlayingPage from './components/PlayingPage'
import Header from './components/Header'




//React-Router paths












const jsx = (
        <TitleSection/>
)


ReactDOM.render(jsx, document.getElementById('app'));
