import { irocoAppPath } from "$lib/irocoAppPath.ts";

describe("irocoAppPath", () => {
  test.each([
    {
      irocoLandingPath: "https://iroco.co/",
      expectedIrocoAppPath: "https://app.iroco.co",
    },
    {
      irocoLandingPath: "https://iroco.co",
      expectedIrocoAppPath: "https://app.iroco.co",
    },
    {
      irocoLandingPath: "https://test.iroco.co/",
      expectedIrocoAppPath: "https://app.test.iroco.co",
    },
    {
      irocoLandingPath: "https://test.iroco.co",
      expectedIrocoAppPath: "https://app.test.iroco.co",
    },
    {
      irocoLandingPath: "http://localhost:5175/",
      expectedIrocoAppPath: "http://app.localhost:5175",
    },
  ])(
    "infers iroco app path form landing path",
    ({ irocoLandingPath, expectedIrocoAppPath }) => {
      const host = irocoAppPath(irocoLandingPath);
      expect(host).toBe(expectedIrocoAppPath);
    },
  );
});
