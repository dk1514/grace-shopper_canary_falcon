import React from 'react'

const Order = props => {
    const {id, userId, isCart, isShipped, createdAt, hats} = props.order
    const {isAdmin} = props.user || false
    let subtotal = 0

    return(
        <div>
            <h3 className='subtitle'>Order:</h3>
            {
                isAdmin? (
                    <ul>
                    <li>User: {userId}</li>
                    <li>isCart: {isCart ? 'true' : 'false'}</li>
                    <li>isShipped: {isCart ? 'true' : 'false'}</li>
                    <li>Created: {createdAt}</li>
                    </ul>
                )
                :
                ( '' )
            }

            Order Info Here

        </div>
    )
}

export default Order
