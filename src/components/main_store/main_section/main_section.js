import React from "react";
import { foods_database } from "../../../context";
import { useContext } from "react";
import './main_section_style/main_section.scss';

import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavbarSection } from '../navbar/navbar';
import { useState } from "react";
import { Single_food } from "../../single_food/single_food";
import { PersonalInfo } from "../../personal_page/personal_page";
import { Fav } from "../../favorite/favorite";
import { useEffect } from "react";
import { Cart } from "../../cart_page/cart_page";
import { Production } from "../production/production";



function Main_section(props) {

    let your_state = useContext(foods_database);
    let foods = your_state.allProducts;

    let [foodid, setfootid] = useState(null);
    let [whichComponent, setwhichComponent] = useState(3);

    let single_food_id = (id) => {

        setfootid(id);
        setwhichComponent(1);
    }

    let backToHome_func = () => {
        setfootid(null);
        setwhichComponent(3)
    }

    let goto_personal_page = () => {
        setfootid(null)
        setwhichComponent(2);
    }

    let goto_favorite_page = () => {
        setwhichComponent(4);
    }

    let goto_cart_page = () => {
        setwhichComponent(5)
    }

   

    let components = [
        <NavbarSection   gotoPersonal={goto_personal_page} gotoFav={goto_favorite_page} gotoCart={goto_cart_page} />,
        <Single_food foodId={foodid} backFunc={backToHome_func} />,
        <PersonalInfo changePersonelInfo={props.changePersonelInfo} backFunc={backToHome_func} />,
        <Container fluid className="main_section">
            <Row>
                {foods.map(a =>
                    <Col key={a.id} xs={12} sm={6} md={4} className="food">
                        <Production 
                        foodInfo={a} 
                        singlefoodId={single_food_id} 
                        addtoCart={props.addtoCart}
                        addtoFav={props.addtoFav}
                       
                        />
                    </Col>)}
            </Row>
        </Container>,
        <Fav backFunc={backToHome_func} deleteFavItem={props.deleteFavItem}/>,
        <Cart backFunc={backToHome_func} deleteCartItem={props.deleteCartItem}/>
    ];

    useEffect( () => {console.log('mainSection => mount and update');},[] )

    return (
        <>
        
            {components[0]}

            {/* {foodid ? components[1] : components[3]} */}

            {components[whichComponent]}

        </>
    )


}

export { Main_section }