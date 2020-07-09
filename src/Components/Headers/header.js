import React, {useState} from 'react';
import { FaSearch, FaHome } from "react-icons/fa";
import {BrowserRouter, Route} from 'react-router-dom';

import Image from '../Images/image';
import QuickSearch from '../quick-search/quickSearch';
import './header.css'

const Header = () => {
    const [query, setQuery] = useState(' ');  

    const search = (query) => {
        if(query === '' || query === ' '){
            setQuery(' ');
        }else{
          setQuery(query);
        }
    }
    return (
        <div>
           <h1>Image Gallery</h1>
           <div className='src'>
                <input type='text' placeholder='search' onChange={(e) => search(e.target.value)}/>
                <span><FaSearch /></span> 
           </div>
           
           <BrowserRouter>
             <QuickSearch />
             <Route path='/' exact render={() => (<Image name={query} title={query}/>)} />
             <Route path='/mountain' render={() => (<Image name='mountain' title='Mountain'/>)} />
             <Route path='/cats' render={() => (<Image name='cat' title='Cats'/>)} />
             <Route path='/dogs' render={() => (<Image name='dog' title='Dogs'/>)}/>
             <Route path='/sun' render={() => (<Image name='sun' title='Sun'/>)}/>
             <Route path='/game' render={() => (<Image name='game' title='Game'/>)}/>
           </BrowserRouter>
           
        </div>
    )
}

export default Header;