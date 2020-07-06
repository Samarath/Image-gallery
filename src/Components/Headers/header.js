import React from 'react';
import { FaSearch } from "react-icons/fa";
import Image from '../Images/image';

const Header = () => {
    return (
        <div>
           <h1>Snap short</h1>
           <input type='text' placeholder='search'/><span><FaSearch /></span> 
           <Image />
        </div>
    )
}

export default Header;