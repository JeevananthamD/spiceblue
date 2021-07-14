import React, { useState } from 'react'
import "../styles/Layout.css"
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux';
import actionGenerator from './redux/action';
import { handleLogout, updateToken } from "./redux/constant";

function mapStateToProps(state) {
    return {
        token: state.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogout: () => {
            localStorage.removeItem("auth_token_jeeva");
            return dispatch(actionGenerator(handleLogout, null));
        },
        updateToken: data => dispatch(actionGenerator(updateToken,data))
    }
}

function Layout(props) {

    const { token, handleLogout, updateToken } = props;

    const history = useHistory();

    if(JSON.parse(localStorage.getItem("auth_token_jeeva")) && !token) {
        updateToken(JSON.parse(localStorage.getItem("auth_token_jeeva")));
    }

    if(!JSON.parse(localStorage.getItem("auth_token_jeeva"))) {
        history.push("/login");
        return<></>
    }

    return (
        <div className="layout"> 
            <div className="sidebar"></div>
            <div className="right_container">
                <div className="topbar"><button onClick={handleLogout}>Log Out</button></div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
