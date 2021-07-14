import {
    handleEditing,
    handleDescription,
    handleDate,
    handleTime,
    handleCancle,
    handleSubmit,
    handleEdit,
    handleDone,
    handleDelete,
    handleEmail,
    handlePassword,
    handleLoginData,
    handleUserData,
    handleTaskData,
    handleTeamData,
    handleUser,
    handleLogout,
    updateToken
} from "./constant"

const initialState = {
    taskList: [],
    isEditing: false,
    isValid: true,
    idState: null,
    description: "Follow Up",
    assignedUser: null,
    date: "",
    time: 0,
    email: "",
    password: "",
    loginData: null,
    userData: null,
    teamData: null,
    isComplete: 0,
    token: null
};


function reducer(state = initialState, action = {}) {
    let stateCopy = { ...state };
    let task, d, dateArr, defaultDate;
    switch (action.type) {
        case handleEmail:
            return { ...state, email: action.payload };
        case handlePassword:
            return { ...state, password: action.payload };
        case handleLoginData:
            return { ...state, loginData: action.payload };
        case handleUserData:
            return { ...state, userData: action.payload };
        case handleTaskData:
            return { ...state, taskList: action.payload };
        case handleTeamData:
            return { ...state, teamData: action.payload, assignedUser: action.payload[0].id };
        case handleEditing:
            if (!state.isEditing) {
                d = new Date();
                dateArr = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
                defaultDate = `${dateArr[0]}-${(dateArr[1] < 10) ? 0 : ''}${dateArr[1]}-${(dateArr[2] < 10) ? 0 : ''}${dateArr[2]}`;
                stateCopy.description = "Follow Up";
                stateCopy.date = defaultDate;
                stateCopy.time = "";
                stateCopy.isValid = true;
                stateCopy.idState = null;
                stateCopy.assignedUser = stateCopy.teamData[0].id;
            }
            stateCopy.isEditing = !stateCopy.isEditing;
            return { ...stateCopy };
        case handleDescription:
            return { ...state, description: action.payload };
        case handleDate:
            return { ...state, date: action.payload };
        case handleTime:
            return { ...state, time: action.payload };
        case handleUser:
            return { ...state, assignedUser: action.payload };
        case handleCancle:
            return { ...state, isEditing: false, isValid: true, idState: null };
        case handleSubmit:
            if (stateCopy.description && stateCopy.description.trim()) {
                stateCopy.taskList = action.payload;
                stateCopy.isEditing = false;
                stateCopy.isValid = true;
                return { ...stateCopy }
            }
            else {
                return { ...state, isValid: false }
            }
        case handleEdit:
            task = stateCopy.taskList.find(i => i.id == action.payload);
            stateCopy.idState = action.payload;
            stateCopy.description = task.task_msg;
            stateCopy.date = task.task_date;
            stateCopy.time = task.task_time;
            stateCopy.assignedUser = task.assigned_user;
            stateCopy.isComplete = task.is_completed;
            stateCopy.isEditing = true;
            return { ...stateCopy };
        case handleDone:
            return { ...stateCopy, taskList: action.payload };
        case handleDelete:
            return { ...stateCopy, taskList: action.payload, idState: null, isEditing: false };
        case handleLogout:
            return { ...stateCopy, loginData: action.payload, email: "", password: "" , token: null};
        case updateToken:
            return { ...stateCopy, token: action.payload, loginData: null };
        default: return state;
    }
}

export default reducer;
