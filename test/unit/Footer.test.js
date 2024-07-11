import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import Footer from "../../src/lib/Footer.svelte";
import en from "../../src/i18n/en.json";
import { addMessages, init } from "svelte-i18n";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing Footer Component", () => {
  test("any title is visible", () => {
    const { getByText } = render(Footer);
    expect(getByText("Job opportunities")).toBeInTheDocument();
    expect(getByText("Blog & News")).toBeInTheDocument();
  });
});
