import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders post if request succeed", async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    //Act
    const listItemElements = await screen.findAllByRole("listitem");

    //Assert
    expect(listItemElements).not.toHaveLength(0);
  });
});
