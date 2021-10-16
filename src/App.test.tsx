import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";

import App from "./App";
import { MOCKED_RETURNED_DATA } from "./constants/constants";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<App />", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce({
      data: MOCKED_RETURNED_DATA,
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

describe("App when errors happens", () => {
  beforeEach(() => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Something went wrong..."));
  });

  it("renders error message when gets data undefined", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Something went wrong...")).toBeInTheDocument();
    });
  });
});
