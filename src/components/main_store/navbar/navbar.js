import { Container, Row, Col } from "react-bootstrap";
import './navbar_style/navbar.css';
import { useEffect } from "react";
import { Typography } from "@mui/material";

function NavbarSection(props) {

    let show_dropdown_menu = () => {

    }

    useEffect(() => { console.log('navbar => mount'); }, [])

    return (

        <div className="navbar_container">
            <Typography>typography</Typography>
            <button className="btn btn-primary" onClick={props.gotoCart}>
                <i className="fa fa-shopping-basket"></i>
                <span>سبد خرید</span>
            </button>




            <div className="profile_container">
                <i className="fa fa-user"></i>
                <span>پروفایل</span>
                <ul className="dropdown">
                    <li className="favorite" onClick={props.gotoFav}><i className="fas fa-heart"></i></li>
                    <li className="setting" onClick={props.gotoPersonal}><i className="fas fa-cog"></i></li>
                </ul>
            </div>


        </div>

    );
}

export { NavbarSection }
