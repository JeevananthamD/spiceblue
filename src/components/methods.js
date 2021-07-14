import axios from 'axios'


export async function apiCall(token, method, body = {}, id = "") {
    let res;
    let options = {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    if (method == "POST") {
        res = await axios.post(`https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38`, body, options)
            .catch(err => err);
    }
    if (method == "PUT") {
        res = await axios.put(`https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/${id}`, body, options)
            .catch(err => err);
    }
    if (method == "GET") {
        res = await axios.get(`https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38`, options)
            .catch(err => err);
    }
    if (method == "DELETE") {
        res = await axios.delete(`https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/${id}`, options)
            .catch(err => err);
    }
    return res.data;
}

export async function apiGetUser(token, url) {
    let res;
    let options = {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    res = await axios.get(url, options)
        .catch(err => err);
    return res.data;
}

export function requestBody(props) {
    let d = new Date();
    let item = {
        assigned_user: props.assignedUser,
        task_msg: props.description,
        task_date: props.date,
        task_time: props.time,
        is_completed: 0,
        time_zone: -1 * d.getTimezoneOffset()
    }
    return item;
}

export function formatTime(time) {
    if(!time) return "00:00";
    let hours = Math.floor(time / (60 * 60));
    let minutes = (time % (60 * 60)) / 60;
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    return `${hours}:${minutes}`;
}

