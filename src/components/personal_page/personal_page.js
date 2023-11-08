import { useContext } from "react";
import { foods_database } from "../../context";
import './personal_page_style/personal_page.css'

function PersonalInfo(props) {

    let your_state = useContext(foods_database);
    let logined_User = your_state.logined_User;
    let { name, family, password, username } = logined_User;

    

    return (
        <>

            <button className="btn btn-warning" onClick={props.backFunc}>خانه</button>

            <div className="personal_inputs">
                <div className="personal_div edit_username_div">
                    <label>نام</label>

                    <input className="edit_username" required type="text" value={name} />
                    <i className="fa fa-user"></i>
                </div>

                <div className="personal_div edit_username_div">
                    <label>نام خانوادگی</label>

                    <input className="edit_userfamily" required type="text" value={family} />
                    <i className="fa fa-user"></i>
                </div>

                <div className="personal_div edit_username_div">
                    <label>نام کاربری</label>

                    <input className="edit_userAddress" required type="text" value={username} />
                    <i className="fa fa-user"></i>
                </div>

                <div className="personal_div edit_username_div">
                    <label>رمز عبور</label>

                    <input className="edit_userPhone" required type="text" value={password} />
                    <i className="fas fa-lock"></i>
                </div>


                <button onClick={() => { props.changePersonelInfo() }} className="btn btn-primary">ویرایش داده ها</button>
            </div>

        </>
    );
}

export { PersonalInfo }