import React, {useState, useEffect} from 'react';
import ImageName from '../Image-name/iname'
import './img.css'


const Image = (props) => {
    const [imges, setState] = useState([]);
    const {name, ...rest } = props

    useEffect(() => {
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c570ce3076166ddf148058757b3e18e9&tags=${name}&format=json&nojsoncallback=1&per_page=24`)
        .then(data => data.json())
        .then(result => {
           const res =  result.photos.photo;
           const pictures = res.map(item => `https://farm66.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`)
           setState(pictures);
        })
    }, [name]);

        
        // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    return (
        <>
        <ImageName pic={props.title}/>
        <div className='grd'>
        {imges.map((item, i) => 
            <div key={i} className='pict'><img src={item} alt='custom images'/></div>
          )}
        </div>
        </>
    )
}

export default Image;