import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SearchRocket from "./SearchRocket";

import { RocketDto } from "../../types/rocketDto";
import { MOCKED_RAW_RETURNED_DATA } from "../../constants/constants";

const rockets: RocketDto[] = MOCKED_RAW_RETURNED_DATA;

describe("<SearchRocket />", () => {
  beforeEach(() => {
    render(<SearchRocket {...{ rockets }} />);
  });

  it("renders correctly", () => {
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  it("finds object when any object value includes search query parameters", async () => {
    const searchInputField = screen.getByTestId("search-input");
    fireEvent.change(searchInputField, { target: { value: "falcon" } });

    expect(await screen.findByText("Falcon 1")).toBeInTheDocument();
  });

  it("doesn't find any object when any given object values doesn't include search query parameters", async () => {
    const searchInputField = screen.getByTestId("search-input");
    fireEvent.change(searchInputField, { target: { value: "heavy" } });

    expect(screen.queryByText("Falcon heavy")).not.toBeInTheDocument();
    expect(screen.queryByText("Falcon 1")).not.toBeInTheDocument();
  });
});
