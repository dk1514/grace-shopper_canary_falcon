import React, {Component} from 'react'
import axios from 'axios'
// import 'bulma/css/bulma.css'

class Cart extends Component {
    constructor() {
        super()
        this.state = {
            quantity: 0
        }
    }

    async componentDidMount() {
        try {
            const {data} = await axios.get('/api/cart/1')
            this.setState({quantity: data.quantity})
        } catch(err) {console.error(err)}
    }

    render() {
        return (
            <div>
                <h1 className='title'>Shopping Cart</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>
                                Product
                            </th>
                            <th>
                                Image
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>
                                Price
                            </th>
                        </tr>
                    </thead>
                </table>
                <div>
                    Total: $
                </div>
                <div>
                    <button className='button is-primary'>Checkout</button>
                </div>
            </div>
        )
    }
}

export default Cart
