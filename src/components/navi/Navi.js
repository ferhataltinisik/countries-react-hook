import React, { useState } from 'react';



const Navi = (props) => {
    //const [isOpen, setIsOpen] = useState(false);

    //const toggle = () => setIsOpen(!isOpen);

    return (
        <div >
            <nav id="nav-bar" className="navbar">
                <div id="logo-box">
                    <a href="/#" className="logo">
                        Search Countries
                    </a>
                </div>
                <span>
                    <a href="/#" >
                        <i className="fas fa-sun"></i>
                    </a>

                </span>
            </nav>

        </div>
    );
}

export default Navi;
