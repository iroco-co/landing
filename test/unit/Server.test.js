/*global describe, test, expect*/
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import Server from "../../src/lib/Server.svelte";
import en from "../../src/i18n/en.json";
import { addMessages, init } from "svelte-i18n";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing Server Component", () => {
  test("its content is correctly rendered", () => {
    const { getByText } = render(Server, { title: "A Title", size: "220" });
    expect(getByText("A Title")).toBeInTheDocument();
  });
});
