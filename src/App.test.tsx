import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";

import App from "./App";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<App />", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          rocket_name: "Falcon",
          diameter: 1.68,
          height: 22.25,
          mass: 30146,
          cost_per_launch: 6700000,
        },
      ],
    });
  });

  it("renders correctly", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });

  it("Calls the GET method", async () => {
    render(<App />);

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalled();
    });
  });

  it("Calls the GET method as expected", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Falcon")).toBeInTheDocument();
    });
  });
});
