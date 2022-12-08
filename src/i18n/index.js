import { register, init } from "svelte-i18n";

register("en", () => import("./en.json"));
register("fr", () => import("./fr.json"));

init({
  fallbackLocale: "fr",
  initialLocale: "fr",
});
