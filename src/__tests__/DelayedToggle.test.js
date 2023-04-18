import React from "react";
import { DelayedToggle } from "../Components/DelayedToggle";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<DelayedToggle />", () => {
  it("reveals text when toogle is ON", async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText("토글");
    fireEvent.click(toggleButton);
    await screen.findByText("야호!!", {}, { timeout: 3000 });
  });
});
