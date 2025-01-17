import { render } from "@testing-library/svelte";
import Energy from "../../src/lib/Energy.svelte";
import en from "../../src/i18n/en.json";
import { addMessages, init } from "svelte-i18n";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing Energy Component", () => {
  test("its content is correctly rendered", () => {
    const { getByText } = render(Energy, { title: "A Title", size: "220" });
    expect(getByText("A Title")).toBeInTheDocument();
  });
});
