import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen, waitFor } from "@testing-library/vue";
import Index from "../pages/index.vue";

describe("Index", () => {
  it("should render", async () => {
    await renderSuspended(Index);

    await waitFor(() =>
      expect(screen.getByText("hello world")).toBeInTheDocument(),
    );
  });
});
