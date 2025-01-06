import React from 'react';
import { Link } from 'react-router-dom';


const SideBar = () => {
    return (
        <div>
            <div className="menu">
                    <span className='menu_text'>MENU</span>
                        <Link to="/create"><i class="bi bi-cart"></i>Create Food</Link>
                        <Link to="/"><i class="bi bi-file-earmark-text"></i>All Food</Link>
            </div>
        </div>
    );
};

export default SideBar;