
import React from "react";
import { foods_database } from "../../../context";
import { useContext } from "react";
import './cart_eachProduct.css'
import { Container, Row, Col, Nav } from "react-bootstrap";

import { change_number } from "../../../numberChange";

function Cart_product(props) {

    let your_state = useContext(foods_database);

    let { id, name, description, picAddress, price, count } = props.food;
    let price_for_each_food = count * price;

    return (
        <Container fluid className="cart_eachproduct_container " >
            <Row className="eachRow align-items-center m-4">
                <Col className="" xs={12} md={4}>
                    <img src={picAddress[0]} />
                </Col>
                <Col className="" xs={12} md={2}>
                    <h4>{name}</h4>
                </Col>
                <Col xs={12} md={2}>
                    <p>تعداد : {change_number(count)}</p>
                </Col>
                <Col xs={12} md={3}>
                    <p>قیمت : {change_number(price_for_each_food)}</p>
                </Col>
                <Col xs={12} md={1}>
                    <i onClick={(event) => { props.deleteCartItem(id) }} className="fa fa-close"></i>
                </Col>

            </Row>


        </Container>
    )

}

export { Cart_product }