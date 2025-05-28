// src/Components/MojTaskForm.js

import React from "react";
import * as Yup from "yup";
import {
    Formik, Form,
    Field, ErrorMessage
} from "formik";
import {
    FormGroup,
    FormControl, Button
} from "react-bootstrap";

const MojTaskForm = (props) => {
    const validationSchema =
        Yup.object().shape({
            taskDescription: Yup.string().required("Please enter a description"),
            taskStatus: Yup.string().required("Please enter a status"),
            taskDueDate: Yup.date().required("Please select a date"),
        });
    return (
        <div className="form-wrapper">
            <Formik {...props}
                validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <label>Description</label>
                        <Field
                            placeholder="Enter description..."
                            name="taskDescription"
                            type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="taskDescription"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                    <label>Status</label>
                        <Field
                            placeholder="Enter status..."
                            name="taskStatus"
                            type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="taskStatus"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                    <label>Due Date</label>
                        <Field
                            name="taskDueDate"
                            type="date"
                            className="form-control" />
                        <ErrorMessage
                            name="taskDueDate"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <Button variant="danger" size="lg"
                        block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default MojTaskForm;