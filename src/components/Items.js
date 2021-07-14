import React from 'react'
import "../styles/Items.css"
import { FaCheck, FaPencilAlt } from "react-icons/fa";
import { formatTime } from "./methods";

function Items({ data, icon, handleEdit, updateStatus }) {
    let { id, task_msg, task_date, task_time, is_completed } = data;
    return (
        <li className="item">
            <div className="item_wrap">
                <div className="item_profile">
                    <img src={icon} height="32px" width="32px"/>
                </div>
                <div className="item_detail">
                    <div className="item_title">
                        <span style={{ color: (is_completed) ? "white" : "black", backgroundColor: (is_completed) ? "green" : "white" }}>
                            {task_msg}
                        </span>
                    </div>
                    <div className="item_time">
                        <span>{task_date}</span>
                        {(task_time) ?
                            <>
                                <span>at</span>
                                <span>{formatTime(task_time)}</span>
                            </>
                            : ""
                        }
                    </div>
                </div>
                <div className="item_editing">
                    <button className="edit" onClick={() => handleEdit(id)}>
                        <FaPencilAlt />
                    </button>
                    <button className="check" onClick={() => updateStatus(id)}>
                        <FaCheck />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default Items
