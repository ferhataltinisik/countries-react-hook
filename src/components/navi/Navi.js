import React, {Component} from 'react';

class Navi extends Component {
    render() {
        return (
            <div className="text-lg-center">

                <nav id="nav-bar" className="navbar">
                    <div id="logo-box" >
                        <a href="/#" className= "logo">
                            Search Countries
                        </a>
                    </div>
                    <span>
                        <a href="/#">
                        <i className="fas fa-sun"></i>
                        </a>
                    </span>
                </nav>
            </div>
        );
    }
}

export default Navi;

