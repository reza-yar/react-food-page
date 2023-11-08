import { foods_database } from "../../context";
import { useContext } from "react";
import './single_food_style/single_food.css';
import SimpleImageSlider from "react-simple-image-slider";
import { Container, Row, Col } from "react-bootstrap";



function Single_food(props) {


    let your_state = useContext(foods_database);
    let foods = your_state.allProducts;
    let comments = your_state.comments;
    

    let food_obj = foods.find(function (a) { return a.id == props.foodId });
    let comment_obj = comments.find(function (a) { return a.id == props.foodId });

    let { id, name, price, description, picAddress } = food_obj;

    const images = [
        { url: picAddress[0] },
        { url: picAddress[1] },
        { url: picAddress[2] }
    ];

    return (

        <>

            <Container fluid className="single_food_container">

                <button className="btn btn-warning" onClick={props.backFunc}>خانه</button>
                <Row>
                    <Col className="single_food slider_container" xs={12} sm={6}>
                        <SimpleImageSlider className='uuu'
                            width={300}
                            height={200}
                            images={images}
                            showBullets={true}
                            showNavs={false}
                            autoPlay={true}

                        />
                    </Col >
                    <Col className="single_food food_introduce_container" xs={12} sm={6}>
                        <div>
                            <h1>{name}</h1>
                            <p>{description}</p>
                            <span>{price}تومان</span>
                        </div>
                    </Col>
                </Row>


                <div>
                    <h3>نظرات کاربران</h3>
                    {comment_obj.username_comment.map(a =>
                        <>
                            <span>{a[0]+" : "}</span>
                            <p>{a[1]}</p>
                        </>
                    )}
                </div>
            </Container>



        </>

    )

}

export { Single_food }