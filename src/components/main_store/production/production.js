import { useState } from "react";

import { change_number } from "../../../numberChange";
import { clear } from "@testing-library/user-event/dist/clear";

function Production(props) {

    let [food_count, set_food_count] = useState(1)


    //  props.foodInfo.count = food_count;
    let { id, name, price, picAddress, description } = props.foodInfo;

    let count_plus = () => {
        set_food_count(food_count + 1);
    }
    let count_minus = () => {
        if (food_count == 1) {
           return 
        }
        set_food_count(food_count - 1);
    }
    
    
    let added_food = props.foodInfo;
    added_food.count = food_count;

    return (
        <div className="food_container">

            <img src={picAddress[2]} onClick={() => { props.singlefoodId(id) }} />
            <h4 className="food_name">{name}</h4>
            <p className="food_description">{description}</p>
            <p className="food_price"><span>{change_number(price)}</span>  تومان</p>
            <button onClick={() => {props.addtoFav(props.foodInfo)}} className="addto_favorite btn btn-primary">اضافه کردن به لیست علاقه مندیها</button>
            <div className="food_count">
                <button className="plus_count btn btn-primary" onClick={count_plus}>+</button>
                <span  className="food_counter">{change_number(food_count)}</span>
                <button className="minus_count btn btn-primary" onClick={count_minus}>-</button>
            </div>
            <button className="addto_cart btn btn-primary" onClick={() => { props.addtoCart(added_food) }}>اضافه کردن به سبد خرید</button>
        </div>
    )

}

export { Production }