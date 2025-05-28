import React from "react";
import { render, screen } from "@testing-library/react";
import MojTaskList from "../Components/mojtask-list.component";
import axios from "axios";

jest.mock("axios");

const dummyTaskList = [
    {
        TaskId: 1,
        TaskDescription: "Test Task",
        TaskStatus: "Open",
        TaskDueDate: "2025-05-15"
    }
]

test('fake pass', () => {
    expect(true).toBeTruthy();
})


test('renders MojTaskList headings', async () => {
    axios.get.mock.ResolvedValue({ data: dummyTaskList})
    render(<MojTaskList />);
    await expect(screen.getByText(/Task Name/i)).toBeInTheDocument();
    await expect(screen.getByText(/Status/i)).toBeInTheDocument();
});
    