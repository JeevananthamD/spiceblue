import React from 'react'
import "../styles/TaskForm.css"
import { FaTrashAlt } from "react-icons/fa";
import { connect } from 'react-redux'
import actionGenerator from './redux/action'
import {
    handleDescription,
    handleDate,
    handleTime,
    handleCancle,
    handleSubmit,
    handleDelete,
    handleUser
} from "../components/redux/constant";
import { requestBody, apiCall, formatTime } from "./methods";

function mapStateToProps(state) {
    return {
        isValid: state.isValid,
        description: state.description,
        date: state.date,
        time: state.time,
        teamData: state.teamData,
        assignedUser: state.assignedUser,
        idState: state.idState,
        isComplete: state.isComplete,
        taskList: state.taskList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: data => dispatch(actionGenerator(handleSubmit, data)),
        handleDescription: e => dispatch(actionGenerator(handleDescription, e.target.value)),
        handleDate: e => dispatch(actionGenerator(handleDate, e.target.value)),
        handleTime: e => {
            let timeStr = e.target.value;
            let hours = timeStr.substr(0, 2);
            let minutes = timeStr.substr(3, 2);
            let seconds = ((parseInt(hours) * 60) + parseInt(minutes)) * 60;
            return dispatch(actionGenerator(handleTime, seconds));
        },
        handleDelete: data => dispatch(actionGenerator(handleDelete, data)),
        handleCancle: () => dispatch(actionGenerator(handleCancle, "")),
        handleUser: e => dispatch(actionGenerator(handleUser, e.target.value))
    };
}


function TaskForm(props) {

    const {
        handleSubmit,
        handleDescription,
        handleDate,
        handleTime,
        handleDelete,
        handleCancle,
        handleUser,
        isValid,
        description,
        date,
        time,
        teamData,
        assignedUser,
        idState
    } = props;

    async function submit(e) {
        e.preventDefault();
        let token = JSON.parse(localStorage.getItem("auth_token_jeeva"));
        let task = requestBody(props);
        if (!props.idState) {
            await apiCall(token, "POST", task)
            .catch(err => console.log(err));
        }
        else {
            task.is_completed = props.isComplete;
            await apiCall(token, "PUT", task, props.idState)
            .catch(err => console.log(err))
        }
        let tasksRes = await apiCall(token, "GET")
        .catch(err => console.log(err));
        handleSubmit(tasksRes.results);
    }

    async function deleteTask() {
        let token = JSON.parse(localStorage.getItem("auth_token_jeeva"));
        await apiCall(token, "DELETE", {}, idState)
        .catch(err => console.log(err));
        let tasksRes = await apiCall(token, "GET");
        handleDelete(tasksRes.results);
    }

    return (
        <form className="task_form" onSubmit={submit}>
            <div className="task_description">
                <label htmlFor="description">Task description</label>
                <input type="text" id="description" onChange={handleDescription} value={description} />
                {!isValid && <p style={{ color: "red" }}>Required</p>}
            </div>
            <div className="date_time">
                <div className="date">
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" onChange={handleDate} value={date} />
                </div>
                <div className="time">
                    <label htmlFor="time">Time</label>
                    <input id="time" type="time" onChange={handleTime} value={formatTime(time)}/>
                </div>
            </div>
            <div className="assign_user">
                <label>Assign User</label>
                <select onChange={handleUser}>
                    {teamData.map(i => {
                        return <option key={i.id} value={i.id} selected={i.id == assignedUser}>{i.name}</option>
                    })}
                </select>
            </div>
            <div className="button_container">
                <button type="button" className="delete" onClick={deleteTask}><FaTrashAlt /></button>
                <span className="rignt_buttons">
                    <button type="button" className="cancel" onClick={handleCancle}>Cancel</button>
                    <button type="submit" className="save" onClick={submit}>Save</button>
                </span>
            </div>
        </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
