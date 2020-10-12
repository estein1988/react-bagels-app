import React from 'react'

const Bagel = (props) => {
    return (
    <li>
        <h3>Type: {props.type}</h3>
        <h3>Rating: {props.rating}</h3>
    </li>
    )
}

export default Bagel