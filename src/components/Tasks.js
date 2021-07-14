import React, { useEffect } from 'react'
import "../styles/Task.css"
import TaskForm from './TaskForm'
import { BsPlus } from "react-icons/bs"
import Items from "./Items"
import { connect } from 'react-redux'
import actionGenerator from './redux/action'
import {
    handleEditing,
    handleEdit,
    handleDone,
    handleUserData,
    handleTaskData,
    handleTeamData
} from "./redux/constant"
import { apiGetUser, apiCall } from './methods'

function mapStateToProps(state) {
    return {
        taskList: state.taskList,
        isEditing: state.isEditing,
        userData: state.userData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleEditing: () => dispatch(actionGenerator(handleEditing, "")),
        handleEdit: id => dispatch(actionGenerator(handleEdit, id)),
        handleDone: data => dispatch(actionGenerator(handleDone, data)),
        handleUserData: data => dispatch(actionGenerator(handleUserData, data)),
        handleTaskData: data => dispatch(actionGenerator(handleTaskData, data)),
        handleTeamData: data => dispatch(actionGenerator(handleTeamData, data))
    };
}

function Tasks(props) {

    const {
        taskList,
        isEditing,
        userData,
        handleEditing,
        handleEdit,
        handleDone,
        handleUserData,
        handleTaskData,
        handleTeamData
    } = props;

    async function updateStatus(id) {
        let token = JSON.parse(localStorage.getItem("auth_token_jeeva"));
        let task = taskList.find(i => i.id == id);
        let d = new Date();
        let updatedTask = {
            assigned_user: task.assigned_user,
            task_msg: task.task_msg,
            task_date: task.task_date,
            task_time: task.task_time,
            is_completed: (task.is_completed)? 0: 1,
            time_zone: -1 * d.getTimezoneOffset()
        }
        await apiCall(token, "PUT", updatedTask, id)
        .catch(err => console.log(err));
        let tasks = await apiCall(token, "GET")
        .catch(err => console.log(err));
        console.log(id);
        handleDone(tasks.results);
    }

    useEffect(async () => {
        let token = JSON.parse(localStorage.getItem("auth_token_jeeva"));
        if (token) {
            let userDataRes = await apiGetUser(token, "https://stage.api.sloovi.com/user");
            let taskDataRes = await apiCall(token, "GET", "https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38");
            let teamDataRes = await apiGetUser(token, "https://stage.api.sloovi.com/team");
            handleUserData(userDataRes.results);
            handleTaskData(taskDataRes.results);
            handleTeamData(teamDataRes.results.data);
        }
    }, [])

    return (
        <div className="task_container">
            <h1 style={{ paddingBottom: "10px" }}>{userData?.name}</h1>
            <div className="task_header">
                <div className="task">
                    {`TASKS ${taskList?.length}`}
                </div>
                <button className="task_add" onClick={handleEditing}>
                    <BsPlus size={"1.8em"} />
                </button>
            </div>
            {(isEditing) ?
                <TaskForm />
                :
                <ul>
                    {(taskList?.length) ? taskList.map(i => <Items
                        key={i.id}
                        data={i}
                        icon={userData.icon}
                        handleEdit={handleEdit}
                        updateStatus={updateStatus}
                    />)
                        : ""
                    }
                </ul>
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
