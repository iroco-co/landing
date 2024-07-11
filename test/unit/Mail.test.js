import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import Mail from "../../src/lib/Mail.svelte";
import en from "../../src/i18n/en.json";
import { addMessages, init } from "svelte-i18n";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing Mail Component", () => {
  test("its content is correctly rendered", () => {
    const { getByText } = render(Mail, {
      title: "A Title",
      size: "220",
      strokeWidth: "1",
    });
    expect(getByText("A Title")).toBeInTheDocument();
  });
});
