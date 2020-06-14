import React from 'react';
import Typical from 'react-typical';
import coverImg from "../styles/images/beach.jpg";
import mobileImg from "../styles/images/beach-mobile.jpg";
import tabletImg from "../styles/images/beach-tablet.jpg";
import SocialFollow from './SocialFollow';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
    }
      
    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange.bind(this));
    }
      
    handleWindowSizeChange() {
        this.setState({width: window.innerWidth});
    };

    render() {
        const { width } = this.state.width;
        const isMobile = width <= 500;
        const isTablet = width <= 1024;

        if (isMobile) {
            return (
                <div id="home" className="image">
                    <img src={mobileImg} className ="img-responsive" alt="Responsive image" width={width}/>
                    <h1>
                        <Typical
                        steps={['Hello!', 500, 'I am Tan Li Lin', 1000, 'Welcome to my page', 1000]}
                        loop={Infinity}
                        wrapper="p"
                        /> 
                    </h1>
                </div>
                );
        } 
        if (isTablet) {
            return (
                <div id="home" className="image">
                    <img src={tabletImg} className ="img-responsive" alt="Responsive image"  width={width}/>
                    <h1>
                        <Typical
                        steps={['Hello!', 500, 'I am Tan Li Lin', 1000, 'Welcome to my page', 1000]}
                        loop={Infinity}
                        wrapper="p"
                        /> 
                    </h1>
                </div>
                );
        } 
        else {
            return (
                <div id="home" className="image">
                    <img src={coverImg} className ="img-responsive" alt="Responsive image"  width={width} />
                    <h1>
                        <Typical
                        steps={['Hello!', 500, 'I am Tan Li Lin', 1000, 'Welcome to my portfolio', 1000]}
                        loop={Infinity}
                        wrapper="p"
                        />
                        
                        
                    </h1>
                    <div className="header-social">
                    <SocialFollow />
                    </div> 
                    
                    
                </div>
            );
        }
    }
}

