import React from 'react'

const Image_Name = (props) => {
    return (
        <h1>{props.pic === 'nice'? ' ': props.pic} Pictures</h1>
    )
}

export default Image_Name;
