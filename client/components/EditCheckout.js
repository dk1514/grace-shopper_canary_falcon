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

    handleChange(event) {
        this.setState({
          quantity: event.target.value
        })
      }

      handleSubmit() {

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
