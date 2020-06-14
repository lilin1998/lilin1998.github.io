import React from 'react';
import Header from './Header';
import Home from './Home';
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
                <Resume />
                <Footer />
            </div>
        );
    }
}
