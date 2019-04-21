import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { increaseQuantity, decreaseQuantity,removeItem} from '../store/orders'
import Checkout from './Checkout'
class Cart extends Component{

    // remove item from cart
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    // increase quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    // decrease quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
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
                        ITEMS GO HERE
                    </ul>
                </div>
                <Checkout />
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        // items: state.addedItems,
        addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        // removeItem: (id)=>{dispatch(removeItem(id))},
        // addQuantity: (id)=>{dispatch(addQuantity(id))},
        // subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
