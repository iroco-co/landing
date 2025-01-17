import index from "../../src/routes/+page.svelte";
import { render } from "@testing-library/svelte";
import { addMessages, init } from "svelte-i18n";
import en from "../../src/i18n/en.json";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing HomePage", () => {
  test("the page is correctly rendered", () => {
    const { getByText } = render(index);
    expect(getByText("Open source and trustworthy email")).toBeInTheDocument();
  });
});
