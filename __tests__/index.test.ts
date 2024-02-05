import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { fireEvent, screen, waitFor } from "@testing-library/vue";
import Index from "../pages/index.vue";

describe("Index", () => {
  it("should render", async () => {
    await renderSuspended(Index, {
      global: {
        plugins: [PrimeVue, ToastService],
      }
    });

    const button = screen.getByText("click me");

    await fireEvent.click(button);

    await waitFor(() => screen.getByText('toast'))
  });
});
