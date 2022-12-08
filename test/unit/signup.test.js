/*global describe, test, expect*/
import signup from "../../src/routes/signup/+page.svelte";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import { addMessages, init } from "svelte-i18n";
import en from "../../src/i18n/en.json";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing Signup Page", () => {
  test("headers are correctly rendered", () => {
    const { getByText } = render(signup);

    expect(getByText("Our offer")).toBeInTheDocument();
  });
});
