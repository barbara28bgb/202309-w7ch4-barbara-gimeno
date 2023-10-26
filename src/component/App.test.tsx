import App from "./App/App";
import { render, screen } from "@testing-library/react";

describe("Given an App component", () => {
  describe("When it receives a Perezosos text", () => {
    test("then it should return Perezosos inside the heading", () => {
      const text = "Perezosos";

      render(<App />);

      const expectedText = screen.getByRole("heading", { name: text });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
