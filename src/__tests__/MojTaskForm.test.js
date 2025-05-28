import React from "react";
import { render, screen } from "@testing-library/react";
import MojTaskForm from "../Components/MojTaskForm";


test('renders the CreateMojForm', () => {
    render(<MojTaskForm />);
    const formElement = screen.getByText('Description');
    expect(formElement).toBeInTheDocument();
});
    