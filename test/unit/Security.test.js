import { render } from "@testing-library/svelte";
import Security from "../../src/lib/Security.svelte";
import en from "../../src/i18n/en.json";
import { addMessages, init } from "svelte-i18n";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing Security Component", () => {
  test("its content is correctly rendered", () => {
    const { getByText } = render(Security, { title: "A Title", size: "220" });
    expect(getByText("A Title")).toBeInTheDocument();
  });
});
