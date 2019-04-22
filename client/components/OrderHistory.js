// tier 2
// order history will go here

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOrders} from '../store'
import Order from './Order'

class OrderHistory extends Component {
    render() {
        return (
            <div>
                <div className='notification is-danger'>
                    You currently have no order history.
                </div>
            </div>
        )
    }
}

export default connect(null, null)(OrderHistory)
