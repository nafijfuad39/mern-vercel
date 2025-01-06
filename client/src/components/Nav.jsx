import React from 'react';
import logo from '../assets/Image/Logo.png'

const Nav = () => {
    return (
        <div className='container'>
                <div className="logo ps-5">
                        <div className="logoImag">
                            <img src={logo} alt="" />
                        </div>
                        <div className="logo_text">
                            <span>CRUD FOOD</span>
                        </div>
                </div>
        </div>
    );
};

export default Nav;