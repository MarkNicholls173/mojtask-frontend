//src/Components/MojTaskRow.js

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DateFormatter } from "../utils";
import axios from "axios";

const MojTaskTableRow =
    (props) => {
        const {
            taskId,
            taskDescription,
            taskStatus,
            taskDueDate
        } = props.obj;

        const deleteTask = () => {
            axios
                .delete(
"http://localhost:5021/api/mojtasks/" + taskId)
                .then((res) => {
                    if (res.status === 204) {
                        alert("Task successfully deleted");
                        window.location.reload();
                    } else Promise.reject();
                })
                .catch(
                    (err) =>
                        alert("Something went wrong"));
        };

        return (
            <tr>
                <td>{taskDescription}</td>
                <td>{taskStatus}</td>
                <td>{DateFormatter(taskDueDate)}</td>
                <td>
                    <Link className="edit-link"
                        to={"/edit-mojtask/" + taskId}>
                        Edit
                    </Link>
                    <Button
                        onClick={deleteTask}
                        size="sm" variant="danger">
                        Delete
                    </Button>
                </td>
            </tr>
        );
    };

export default MojTaskTableRow;