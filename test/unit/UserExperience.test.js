import { render } from "@testing-library/svelte";
import UserExperience from "../../src/lib/UserExperience.svelte";
import en from "../../src/i18n/en.json";
import { addMessages, init } from "svelte-i18n";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing UserExperience Component", () => {
  test("its content is correctly rendered", () => {
    const { getByText } = render(UserExperience, { title: "A Title" });
    expect(getByText("A Title")).toBeInTheDocument();
  });
});
