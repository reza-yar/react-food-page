import { useContext } from "react";
import { foods_database } from "../../context";
import { Cart_product } from "../cart_page/cart_eachProduct/cart_eachProduct";
import { Container, Row, Col } from "react-bootstrap";
import { change_number } from "../../numberChange";

function Fav(props) {

    let fav_list = useContext(foods_database).favList;
    console.log(fav_list);

    return (
        <>
            <button className="btn btn-warning" onClick={props.backFunc}>خانه</button>
            {
                fav_list.map(a =>
                    <Container key={a.id} fluid className="cart_eachproduct_container " >
                        <Row className="eachRow align-items-center m-4">
                            <Col className="" xs={12} md={4}>
                                <img src={a.picAddress[0]} />
                            </Col>
                            <Col className="" xs={12} md={7}>
                                <h4>{a.name}</h4>
                            </Col>
                            <Col xs={12} md={1}>
                                <i onClick={(event) => { props.deleteFavItem(a.id) }} className="fa fa-close"></i>
                            </Col>

                        </Row>


                    </Container >
                )
            }
        </>

    );
}

export { Fav };