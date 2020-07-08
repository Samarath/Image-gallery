import React, {useState} from 'react';
import { FaSearch } from "react-icons/fa";
import Image from '../Images/image';
import './header.css'

const Header = () => {
    const [query, setQuery] = useState(' ');  

    const search = (query) => {
        if(query === '' || query === ' '){
            setQuery('nice');
        }else{
          setQuery(query);
        }
    }

    // console.log(query, 'query')
    return (
        <div>
           <h1>Image Gallery</h1>
           <div className='src'>
                <input type='text' placeholder='search' onChange={(e) => search(e.target.value)}/>
                <span><FaSearch /></span> 
           </div>
           
           <Image srch={query}/>
        </div>
    )
}

export default Header;