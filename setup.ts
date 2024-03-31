import "@testing-library/jest-dom/vitest";
import { expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

vi.mock("~/utils/symbol", () => {
  return {
    PROVIDES_SYMBOL: Symbol.for("my_provides"),
  };
});
