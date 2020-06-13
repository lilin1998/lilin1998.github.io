import React from 'react';

import Header from './Header';
import Home from './Home';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Resume from './Resume';

export default class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <AboutMe />
                <Skills />
                <Resume />
                <Footer />
            </div>
        );
    }
}
