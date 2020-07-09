import React from 'react';
import {Link} from 'react-router-dom';
import './qs.css';

const QuickSearch = () => {
    return (
        <div>
            <ul>
                <li><Link to='/mountain'>Mountain</Link></li>
                <li><Link to='/cats'>Cats</Link></li>
                <li><Link to='/dogs'>Dogs</Link></li>
                <li><Link to='/sun'>Sun</Link></li>
                <li><Link to='/game'>Game</Link></li>
            </ul>
        </div>
    )
}

export default QuickSearch;
