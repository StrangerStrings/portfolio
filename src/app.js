import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import TitleSection from './components/TitleSection'
import PortfolioSection from './components/PortfolioSection'
import SkillsSection from './components/SkillsSection'




//React-Router paths












const jsx = (
    <div>
        <TitleSection/>
        <PortfolioSection/>
        {/* <SkillsSection/> */}
    </div>
)


ReactDOM.render(jsx, document.getElementById('app'));
