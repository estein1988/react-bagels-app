import React from 'react'
import Delete from './Delete'
import Bagel from './Bagel'

const BagelContainer = () => {
    return (
    <>
    <h3>This is a bagels container</h3>
    <div>
        <Delete />
        <Bagel/>
    </div>
    </>
    )
}

export default BagelContainer