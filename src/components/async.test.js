import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async componenent", () => {
  test("renders posts if request succeeds ", async () => {
    //overiding the build in method so we dont send unneccessary fetch calls while testing
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    render(<Async />);
    //find all by role will wait a few render cycles for the async task to complete whereas get all by role will return immediately
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
