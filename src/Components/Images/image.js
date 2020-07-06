import React, {useState} from 'react';
import './img.css'


const Image = () => {
    const [imges, setState] = useState([]);

        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c570ce3076166ddf148058757b3e18e9&tags=cat&format=json&nojsoncallback=1&per_page=24`)
        .then(data => data.json())
        .then(result => {
        setState(result.photos.photo)
        })

    return (
        <div className='grd'>
            {imges.map((image, i) => <div key={i}><img src={image} alt='custom'/></div>)}
        </div>
    )
}

export default Image;