import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOrders} from '../store'
import Order from './Order'

let hardCodedData = []

class OrderHistory extends Component {
    render() {
        let orderHistory = hardCodedData.length ?
        (<div>
            <h1 className='title'>Your Order History</h1>
            <div className='columns is-centered'>
                <div className='column'>ORDER HERE</div>
            </div>
        </div>)
        :
        (
        <div>
            <div className='notification is-danger'>
                You currently have no order history.
            </div>
        </div>
        )
        return (
            <div>
                {orderHistory}
            </div>
        )
    }
}

export default connect(null, null)(OrderHistory)
