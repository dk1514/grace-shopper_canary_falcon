import React, {Component} from 'react'
import HatForm from './HatForm'
import {connect} from 'react-redux'

const defaultState = {
    name: '',
    type: '',
    description: '',
    manufacturer: '',
    sku: 0,
    price: 0,
    quantity: 0
}

class AddToCart extends Component {
    constructor() {
        super()
        this.state = defaultState
    }

    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
          })
    }

    async submitHandler(event) {
        event.preventDefault()
        const newProduct = await this.props.postProduct(this.state)
        this.setState(defaultState)
    }

    render() {
        return (
            <div></div>
            // <HatForm
            //     product={this.state}
            //     changeHandler={this.changeHandler}
            //     submitHandler={this.submitHandler}
            // />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      postProduct: newProduct => dispatch(postProduct(newProduct))
    }
  }
  
export default connect(null, mapDispatchToProps)(AddProduct)
