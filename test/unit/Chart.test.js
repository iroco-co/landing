import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import Chart from "$lib/SubscriptionChart.svelte";
import en from "../../src/i18n/en.json";
import { addMessages, init } from "svelte-i18n";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing Chart Component", () => {
  test("render the text of the component", () => {
    const { getByText } = render(Chart, {
      size: 200,
    });

    expect(getByText("Iroco")).toBeInTheDocument();
    expect(getByText("Payment provider")).toBeInTheDocument();
    expect(getByText("Hosting")).toBeInTheDocument();
    expect(getByText("VAT")).toBeInTheDocument();
  });
});
