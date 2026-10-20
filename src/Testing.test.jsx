import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Testing from "./Testing";

describe("Testing Component", () => {
  test("renders heading", () => {
    render(<Testing />);

    expect(screen.getByText("Testing for Test Cases")).toBeInTheDocument();
  });

  test("renders addition result", () => {
    render(<Testing />);

    expect(screen.getByText("2 + 3 = 5")).toBeInTheDocument();
  });
});
