import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TableForm from "./index.js";

describe("TableForm Component", () => {
  test("renders form correctly", () => {
    render(<TableForm />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  test("allows form submission", () => {
    render(<TableForm />);

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2023-10-10" },
    });
    fireEvent.change(screen.getByLabelText(/Choose time/i), {
      target: { value: "12:00" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "2" },
    });

    fireEvent.click(screen.getByText(/Submit/i));

    expect(window.alert).toBeCalledWith(
      "Congratulations John Doe! Your booking is confirmed for 2023-10-10 at 12:00."
    );
  });

  test("prevents booking if slot is already taken", () => {
    render(<TableForm />);

    // First submission
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2023-10-10" },
    });
    fireEvent.change(screen.getByLabelText(/Choose time/i), {
      target: { value: "12:00" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "2" },
    });
    fireEvent.click(screen.getByText(/Submit/i));

    // Second submission with the same time slot
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2023-10-10" },
    });
    fireEvent.change(screen.getByLabelText(/Choose time/i), {
      target: { value: "12:00" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "3" },
    });
    fireEvent.click(screen.getByText(/Submit/i));

    expect(window.alert).toBeCalledWith(
      "This time slot is already booked. Please choose another."
    );
  });
});
