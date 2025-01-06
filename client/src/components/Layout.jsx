import React from 'react';
import Nav from './Nav';
import SideBar from './SideBar';

const Layout = ({children }) => {
    return (
        <div className='container'>
            <div className="row">
                <Nav/>
                <div className="col-md-3">
                    <SideBar/>
             </div>
             <div className="col-md-9">
                 {children}
             </div>
            </div>
        </div>
    );
};

export default Layout;