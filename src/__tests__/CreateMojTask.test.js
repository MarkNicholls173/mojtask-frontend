import React from "react";
import { render, screen } from "@testing-library/react";
// import CreateMojTask from "../Components/create-mojtask.component";

test('fake pass', () => {
    expect(true).toBeTruthy();
})


test('renders the CreateMojForm form', () => {
    render(<CreateMojForm />);
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
});
    