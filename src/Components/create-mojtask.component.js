// src/Components/create-mojtask.component.js

// CreateMojTask Component for add new MojTask
// Import Modules
import React from "react";
import {
    useState,
    useEffect
} from "react";
import axios from 'axios';
import MojTaskForm
    from "./MojTaskForm";

// CreateMojTask Component
const CreateMojTask = () => {
    const [formValues, setFormValues] =
        useState(
            {
                taskDescription: '',
                taskStatus: '',
                taskDueDate: ''
            })
    // onSubmit handler
    const onSubmit =
        mojTaskObject => {
            axios.post(
'http://localhost:5021/api/mojtasks',
                mojTaskObject)
                .then(res => {
                    if (res.status === 201)
                        alert('Task successfully created')
                    else
                        Promise.reject()
                })
                .catch(err => alert('Something went wrong'))
        }

    // Return MojTask form
    return (
        <MojTaskForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Create Task
        </MojTaskForm>
    )
}

// Export CreateMOjTask Component
export default CreateMojTask