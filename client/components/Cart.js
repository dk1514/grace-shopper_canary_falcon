import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart, increaseQuantity, decreaseQuantity} from '../store/cartReducer'

class Cart extends Component{

    // remove item from cart
    handleRemove = (id)=>{
        this.props.removeFromCart(id);
    }
    // increase quantity
    handleAddQuantity = (id)=>{
        this.props.increaseQuantity(id);
    }
    // decrease quantity
    handleSubtractQuantity = (id)=>{
        this.props.decreaseQuantity(id);
    }
    render(){

        // let addedItems = this.props.addedItems.length ?
        //     (
        //         this.props.addedItems.map(item=>{
        //             return(

        //                 <li className="collection-item avatar" key={item.id}>
        //                             <div className="item-img">
        //                                 <img src={item.img} alt={item.img} className=""/>
        //                             </div>

        //                             <div className="item-desc">
        //                                 <span className="title">{item.title}</span>
        //                                 <p>{item.desc}</p>
        //                                 <p><b>Price: {item.price}$</b></p>
        //                                 <p>
        //                                     <b>Quantity: {item.quantity}</b>
        //                                 </p>
        //                                 <div className="add-remove">
        //                                     <Link to="/cart"><i className="fas carret-up" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
        //                                     <Link to="/cart"><i className="fas caret-down" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
        //                                 </div>
        //                                 <button className="button" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
        //                             </div>

        //                         </li>

        //             )
        //         })
        //     ):

            //  (
            //     <p>Shopping cart is empty.</p>
            //  )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {/* {addedItems} */}
                        ADDED ITEMS GO HERE
                    </ul>
                </div>
                <div>
                    <b>Total: ${this.props.total}</b>
                </div>
                {/* <Checkout /> */}
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
