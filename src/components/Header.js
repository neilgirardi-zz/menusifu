import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <header className="header text-center">
                <div className="brand-color"></div>
                <div className="branding container">
                    <h1 className="logo text-hide">Menusifu</h1>
                </div>
            </header>
        );
    }

}

Header.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
};

export default Header;
