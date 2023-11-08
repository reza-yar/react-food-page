import React from "react";

import './login_page_style/login_page.css';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modalShow: 'hide'
        }
        this.user_inputs_infos = {
            username: '',
            password: ''
        }
    }

    usernameInput_func(event) {

        this.user_inputs_infos.username = event.target.value;

    }
    passwordInput_func(event) {

        this.user_inputs_infos.password = event.target.value;

    }

    modal_show_status(a) {
        this.setState({ modalShow:a});
    }

    render() {
        return (
            <div className="login_main">
                <div className={`modal_container ${this.state.modalShow}`} onClick={this.modal_show_status.bind(this,'hide')}>
                    <h3>این قسمت هنوز تکمیل نشده است </h3>
                </div>
                <form action="">

                    <h1>ورود</h1>
                    <div className="input_area">
                        <div className="text_input">
                            <i className="fa fa-user"></i>
                            <input onChange={(event) => this.usernameInput_func(event)} type="text" placeholder="نام کاربری" required />
                        </div>
                        <div className="password_input">
                            <i className="fa fa-lock"></i>
                            <input onChange={(event) => this.passwordInput_func(event)} type="password" placeholder="گذر واژه" required />
                        </div>
                    </div>
                    <a href="#" onClick={this.modal_show_status.bind(this,"show")}>رمز خود را فراموش کرده اید؟</a>
                    <button onClick={(event) => this.props.loginFunc(this.user_inputs_infos, event)}>ورود</button>

                </form>
            </div>
        )
    }

}

export { Login }