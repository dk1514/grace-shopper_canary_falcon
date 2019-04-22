import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

let hardCodedData = [
    {
        id: 1,
        name: 'red baseball hat',
        price: 19.99,
        quantity: 1,
        imageUrl: '/hatimages/redbaseballcap.jpg',
        description: 'this is a red baseball hat',
    },
    {
        id: 2,
        name: 'green baseball hat',
        price: 19.99,
        quantity: 1,
        imageUrl: '/hatimages/greenbaseballcap.jpg',
        description: 'this is a green baseball hat',
    }
]
let total = 39.98

class Cart extends Component{

    // remove item from cart
    handleRemove = (id)=>{
        // this.props.removeFromCart(id);
    }
    // increase quantity
    handleAddQuantity = (id)=>{
        // this.props.increaseQuantity(id);
    }
    // decrease quantity
    handleSubtractQuantity = (id)=>{
        // this.props.decreaseQuantity(id);
    }
    render(){

        let addedItems = hardCodedData.length ?
            (
                hardCodedData.map(item=>{
                    return(
                        <tr key={item.id}>
                            <td>
                                {item.name}
                            </td>

                            <td>
                                <figure className='image is-48x48'>
                                    <img src={item.imageUrl} alt={item.img} className=""/>
                                </figure>
                            </td>

                            <td>
                                {item.description}
                            </td>

                            <td>
                                ${item.price}
                            </td>

                            <td>
                                {item.quantity}
                            </td>
                            
                            <td>
                                <div>
                                    <button className='button is-success' onClick={()=>{this.handleAddQuantity(item.id)}}>Increase</button>
                                    <button className='button is-warning' onClick={()=>{this.handleSubtractQuantity(item.id)}}>Decrease</button>
                                </div>
                            </td>

                            <td>
                                <button className="button is-danger" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                            </td>
                        </tr>
                    )
                })
            ):
             (
                <p>Shopping cart is empty.</p>
             )

       return(
            <div>
                <div>
                    <h1 className='title'>Your Order</h1>
                    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <thead>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Price</th>                           
                            <th>Quantity</th>                           
                            <th>Change Quantity</th>                           
                            <th>Remove Item</th>                           
                        </thead>
                        <tbody>
                            {addedItems}
                        </tbody>
                    </table>
                </div>
                <div>
                    <b>Total: ${total}</b>
                </div>
                <div className="checkout">
                    <Link to='/success'>
                        <button className="button is-primary" type='button'>Submit Order</button>
                    </Link>
                </div>
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        cart: state.cart,
        total: state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeFromCart: (id)=>{dispatch(removeFromCart(id))},
        increaseQuantity: (id)=>{dispatch(increaseQuantity(id))},
        decreaseQuantity: (id)=>{dispatch(decreaseQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
