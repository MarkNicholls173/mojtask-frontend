//src/Components/edit-mojtask.component.js

// EditMojTask Component for update mojtask data
// Import Modules
import React,
{
    useState,
    useEffect
} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import axios from "axios";
import MojTaskForm
    from "./MojTaskForm";

// EditMojTask Component
const EditMojTask = (props) => {
    let navigate = useNavigate();
    let params = useParams();
    console.log("params: "  + params.id)
    const [formValues, setFormValues] =
        useState(
            {
                taskDescription: '',
                taskStatus: '',
                taskDueDate: ''
            }
        );

    //onSubmit handler
    const onSubmit = (formObject) => {
        

        axios
            .put(
"http://localhost:5021/api/mojtasks/" +
                params.id,
                formObject
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("Task successfully updated");
                    navigate("/mojtask-list");
                } else Promise.reject();
            })
            .catch(
                (err) =>
                    alert("Something went wrong")
            );
    };

    // Load data from server and reinitialize task form
    useEffect(() => {
        axios
            .get(
"http://localhost:5021/api/mojtasks/"
                + params.id
            )
            .then((res) => {
                const {
                    taskDescription,
                    taskStatus,
                    taskDueDate
                } = res.data;
                setFormValues(
                    {
                        taskDescription,
                        taskStatus,
                        taskDueDate
                    });
            })
            .catch(
                (err) =>
                    console.log(err)
            );
    }, []);

    // Return task form
    return (
        <MojTaskForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Update Task
        </MojTaskForm>
    );
};

// Export EditMojTask Component
export default EditMojTask;