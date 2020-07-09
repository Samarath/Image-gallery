import React from 'react'

const ImageName = (props) => {
    return (
        <h1>{props.pic === 'nice'? ' ': props.pic} Pictures</h1>
    )
}

export default ImageName;
