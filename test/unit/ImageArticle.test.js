/*global describe, test, expect*/
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import ImageArticle from "../../src/lib/ImageArticle.svelte";
import en from "../../src/i18n/en.json";
import { addMessages, init } from "svelte-i18n";

addMessages("en", en);
init({ fallbackLocale: "en", initialLocale: "en" });

describe("Testing ImageArticle Component", () => {
  test("render content of the component with one button", () => {
    const { getByText } = render(ImageArticle, {
      imgSrc: "/images/irocoTeamSpirit.png",
      alt: "Iroco Team hiking in the mountains",
      articleTitle: `Iroco, what is it?`,
      articleContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet.",
      buttonList: [{ href: "/", label: "About" }],
    });

    expect(getByText(`Iroco, what is it?`)).toBeInTheDocument();
    expect(
      getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet."
      )
    ).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
  });

  test("render content of the component with two buttons", () => {
    const { getByText } = render(ImageArticle, {
      imgSrc: "/images/irocoTeamSpirit.png",
      alt: "Iroco Team hiking in the mountains",
      articleTitle: "Innovation and openness",
      articleContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet.",
      buttonList: [
        { href: "/", label: "Blog" },
        { href: "/", label: "Github" },
      ],
    });

    expect(getByText("Innovation and openness")).toBeInTheDocument();
    expect(
      getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet."
      )
    ).toBeInTheDocument();
    expect(getByText("Blog")).toBeInTheDocument();
    expect(getByText("Github")).toBeInTheDocument();
  });
});
