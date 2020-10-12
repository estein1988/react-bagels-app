import React from 'react'

const Bagel = (props) => {
    return (
    <li>
        <h3>Type: {props.type}</h3>
        <h3>Rating: {props.rating}</h3>
        <button onClick={ ()=> props.deleteBagel(props.bagel)}>Delete</button>
    </li>
    )
}

export default Bagel