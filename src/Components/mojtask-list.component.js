//src/Components/mojtask-list.component.js

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import MojTaskTableRow from "./MojTaskTableRow";

const MojTaskList = () => {
    const [mojtasks, setMojTasks] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5021/api/MojTasks")
            .then(({ data }) => {
                setMojTasks(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return mojtasks.map((res, i) => {
            return <MojTaskTableRow
                obj={res} key={i} />;
        });
    };

    return (
        <div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Due Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};

export default MojTaskList;