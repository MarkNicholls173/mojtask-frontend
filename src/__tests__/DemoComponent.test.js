import { render, screen } from "@testing-library/react";
import MyButton from "../Components/DemoComponent";

test("render demo button", () => {
    render(<MyButton />);
    expect(screen.getByText(/I'm a button/i)).toBeInTheDocument();
})