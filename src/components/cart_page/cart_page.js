import './cartPage_style/cartPage.css'
import { Cart_product } from './cart_eachProduct/cart_eachProduct';
import { foods_database } from '../../context';
import { useContext } from 'react';
import { useState } from 'react';

import { change_number } from '../../numberChange';

function Cart(props) {

    let cartArray = useContext(foods_database).cart_array;

    if ([...cartArray].length > 1) {
        var foods_price = cartArray.reduce(function (prev, current) {
            if (prev.price) { return ((prev.price * prev.count) + (current.price * current.count)) }
            return (prev + (current.price * current.count))
        });
    }

    if ([...cartArray].length == 1) {
        foods_price = cartArray[0].price*cartArray[0].count;
    }

    let one = <div className="cart_container">
        <button className="btn btn-warning" onClick={props.backFunc}>خانه</button>
        {cartArray.map((a) => <Cart_product key={a.id} food={a} deleteCartItem={props.deleteCartItem} />)}
        <div className='total_price_container'>
            <p>قیمت غذا : {change_number(foods_price)}</p>
            <p>هزینه ارسال : {change_number(2000)}</p>
            <p>هزینه نهایی : {change_number(foods_price + 2000)}</p>
            <button className='btn btn-primary' >پرداخت</button>
        </div>
    </div>



    return (
        <>

            {cartArray.lenght != 0
                ?
                one
                :
                <div className="no_product_is_here">no no no</div>
            }


        </>

    );
}

export { Cart };