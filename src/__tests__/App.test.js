import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test('render app', () => {
    render(<App /> )
    const pageTitle = screen.getByText(/Moj Tasks App/i);
    expect(pageTitle).toBeInTheDocument();
})