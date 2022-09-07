import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component test suit", () => {
  test("renders Hello world on the screem", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //Assert
    const helloWorldElement = screen.getByText("hello world");
    //get function throw error
    //find funciton will give a promise
    //query will nto tthrow error
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders its good to see you ", () => {
    render(<Greeting />);
    //Act
    //assert
    const goodToSeeElement = screen.getByText("its good to see you");
    expect(goodToSeeElement).toBeInTheDocument();
  });
  test(" does not renders changed ", () => {
    render(<Greeting />);
    //Act
    //assert
    const goodToSeeElement = screen.queryByText("Changed");
    expect(goodToSeeElement).toBeNull();
  });
  test(" renders changed on button click", () => {
    render(<Greeting />);
    //Act

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //assert
    const goodToSeeElement = screen.getByText("Changed", { exact: false });
    expect(goodToSeeElement).toBeInTheDocument();
  });
});
