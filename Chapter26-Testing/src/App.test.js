import { screen } from "@testing-library/react";
import App from "./App";
import { createRoot } from "react-dom";

test("renders learn react link", () => {
  const linkElement = screen.getByText(/learn react/i);
  const root = createRoot(linkElement);
  root.render(<App />);
  expect(linkElement).toBeInTheDocument();
});
