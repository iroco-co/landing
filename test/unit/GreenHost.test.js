import { render } from "@testing-library/svelte";
import GreenHost from "../../src/lib/GreenHost.svelte";
import en from "../../src/i18n/en.json";
import { addMessages, init } from "svelte-i18n";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing GreenHost Component", () => {
  test("its content is correctly rendered", () => {
    const { getByText } = render(GreenHost, { title: "A Title", size: "220" });
    expect(getByText("A Title")).toBeInTheDocument();
  });
});
