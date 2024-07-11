import faq from "../../src/routes/faq/+page.svelte";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { addMessages, init } from "svelte-i18n";
import en from "../../src/i18n/en.json";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing Faq Page", () => {
  test("the content is correctly rendered", () => {
    const { getByText } = render(faq);

    expect(getByText("Frequently Asked Questions")).toBeInTheDocument();
  });
});
