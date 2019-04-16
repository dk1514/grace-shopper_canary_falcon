import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getCartThunk} from '../store/cart'

class Cart extends Component {
    // constructor(props) {
    //     super(props)
    //     // this.state = {
    //     //     quantity: 0
    //     // }
    // }

     componentDidMount() {
        // try {
        //     const {data} = await axios.get('/api/cart/1')
        //     this.setState({quantity: data.quantity})
        // } catch(err) {console.error(err)}
        this.props.getCartThunk()
    }

    render() {
        console.log('props', this.props)
        console.log('cart', this.props.cart)
        console.log('cart in cart', this.props.cart.cart[0])
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
                    <tbody>
                        <tr>
                            <td>
                                Product
                            </td>
                            <td>
                                Image
                            </td>
                            <td>
                                {this.props.cart.quantity}
                            </td>
                            <td>
                                Price
                            </td>
                        </tr>
                    </tbody>
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

const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    getCartThunk: () => dispatch(getCartThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
