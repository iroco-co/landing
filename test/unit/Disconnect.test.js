import { render } from "@testing-library/svelte";
import Disconnect from "../../src/lib/Disconnect.svelte";
import en from "../../src/i18n/en.json";
import { addMessages, init } from "svelte-i18n";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing Disconnect Component", () => {
  test("its content is correctly rendered", () => {
    const { getByText } = render(Disconnect, { title: "A Title" });
    expect(getByText("A Title")).toBeInTheDocument();
  });
});
