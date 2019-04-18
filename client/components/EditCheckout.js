import React, {Component} from 'react'
import {connect} from 'react-redux'

class EditCheckout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: props.quantity,
            cart: {
                hats: [],
                isCart: true
            },
            subtotal: 0
        }
    }

    componentDidMount() {
        let localStorageCart = JSON.parse(localStorage.getItem('cart'))
        this.setState({
            cart: localStorageCart,
            quantity: this.state.quantity
          })
    }

    handleChange(event) {
        this.setState({
          quantity: event.target.value
        })
      }

    handleSubmit() {
        event.preventDefault()
        if(this.props.userId) {
            const product = this.props.product
            const quantity = this.props.quantity
            this.props.putQuantity
        }
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <li>
            Quantity:
            <input
                type="text"
                name="quantity"
                value={this.state.quantity}
                onChange={this.handleChange}
            />
            <button className="button" type="submit">
                Update Quantity
            </button>
            </li>
        </form>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return (
//         putQuantity: 
//         editQuantity:
//         getTotal:
//     )
// }

export default connect(null, null)(EditCheckout)
