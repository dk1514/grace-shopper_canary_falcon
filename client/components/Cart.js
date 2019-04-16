import React, {Component} from 'react'

class Cart extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>Shopping Cart</h1>
                {/* product info */}
                Total: $
                <button className='button is-primary'>Checkout</button>
            </div>
        )
    }
}

export default Cart
