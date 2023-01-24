/*global describe, test, expect*/
import about from "../../src/routes/about/+page.svelte";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { addMessages, init } from "svelte-i18n";
import en from "../../src/i18n/en.json";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing About Page", () => {
  test("the page is correctly rendered", () => {
    const { getByText } = render(about);
    expect(getByText("Why do we need trustworthy email?")).toBeInTheDocument();
  });
});
