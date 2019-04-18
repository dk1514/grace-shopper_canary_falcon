import React, {Component} from 'react'
import HatForm from './HatForm'
import {connect} from 'react-redux'

const defaultState = {
    //hat info here
}

class AddToCart extends Component {
    constructor() {
        super()
    }

    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async submitHandler(event) {
        event.preventDefault()
        const newHat = await this.props.addHat(this.state)
        this.setState(defaultState)
    }

    render() {
        return (
            <HatForm />
        )
    }
}

export default AddToCart
