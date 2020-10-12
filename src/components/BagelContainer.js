import React from 'react'
// import Delete from './Delete'
import Bagel from './Bagel'

const BagelContainer = (props) => {
    const bagel = props.bagels.map(bagel => <Bagel key={bagel.id} type={bagel.type} rating={bagel.rating}/>)
    
    return (
    <>
    <h3>This is a bagels container</h3>
    <div>
        {bagel}
    </div>
    </>
    )
}

export default BagelContainer