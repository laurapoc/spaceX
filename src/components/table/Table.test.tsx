import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Table from "./Table";

import { RocketModel } from "../../types/rocketModel";
import { COL_NAMES, MOCKED_RETURNED_DATA } from "../../constants/constants";

const searchResults: RocketModel[] = MOCKED_RETURNED_DATA;

describe("<Table />", () => {
  beforeEach(() => {
    render(<Table {...{ searchResults }} colNames={COL_NAMES} />);
  });

  it("rendes correctly", () => {
    expect(screen.getByText("Rocket name")).toBeInTheDocument();
    expect(screen.getByText("Diameter")).toBeInTheDocument();
    expect(screen.getByText("Height")).toBeInTheDocument();
    expect(screen.getByText("Mass")).toBeInTheDocument();
    expect(screen.getByText("Cost per launch")).toBeInTheDocument();
  });

  it("renders all rockets data according to constructed rocket model", () => {
    expect(screen.getByText("Falcon")).toBeInTheDocument();
    expect(screen.getByText("Falcon Heavy")).toBeInTheDocument();
    expect(screen.getByText("22.25")).toBeInTheDocument();
    expect(screen.getByText("1420788")).toBeInTheDocument();
  });
});
