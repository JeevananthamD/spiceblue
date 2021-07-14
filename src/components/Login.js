import React, { useEffect, useState } from 'react'
import "../styles/Login.css"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import {
    handleEmail,
    handlePassword,
    handleLoginData
} from "./redux/constant"
import actionGenerator from './redux/action'
import axios from 'axios'

function mapStateToProps(state) {
    return {
        email: state.email,
        password: state.password,
        loginData: state.loginData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleEmail: e => dispatch(actionGenerator(handleEmail, e.target.value)),
        handlePassword: e => dispatch(actionGenerator(handlePassword, e.target.value)),
        handleLoginData: data => dispatch(actionGenerator(handleLoginData, data))
    }
}

let tokenUrl = "https://stage.api.sloovi.com/login";
let status = null;

function Login(props) {

    const { email, password, loginData, handleEmail, handlePassword, handleLoginData } = props;
    const history = useHistory();

    if(loginData) {
        status = loginData.code;
        if(status == 200) {
            localStorage.setItem("auth_token_jeeva", JSON.stringify(loginData.results.token));
        }
        console.log(loginData);
    }
    // console.log(JSON.parse(localStorage.getItem("auth_token_jeeva")));
    if(JSON.parse(localStorage.getItem("auth_token_jeeva"))) {
        history.push("/spiceblue/dashboard");
        return<></>
    }

    async function submit(e) {
        e.preventDefault();
        let data = await (await axios.post(tokenUrl, { email, password })).data;
        handleLoginData(data);
    }

    return (
        <div className="login">
            <div>
                <form className="login_form" onSubmit={submit}>
                    <p className="top_error_message" >{ (status == 401)? loginData.message: "" }</p>
                    <div className="login_form_control">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" onChange={handleEmail} value={email} placeholder="example@mail.com"/>
                        <p>{ (status == 400)? loginData.results.find(i => i.key == "email")?.msg:"" }</p>
                    </div>
                    <div className="login_form_control">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" onChange={handlePassword} value={password} placeholder="Minimum 8 Characters"/>
                        <p>{ (status == 400)? loginData.results.find(i => i.key == "password")?.msg:"" }</p>
                    </div>
                    <div className="login_button">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
