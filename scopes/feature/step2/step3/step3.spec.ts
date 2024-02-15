import { previewUrl } from "@/testing/playwright.config";
import { BaseConfiguration } from "@/testing/scopes/config";
import { expect, mergeTests } from "@playwright/test";
import { ExampleSecondTest } from "../step2.spec";

export const ExampleThirdTest = mergeTests(
  BaseConfiguration,
  ExampleSecondTest,
).extend<{ ExampleThirdTestFixture: true }>({
  ExampleThirdTestFixture: [
    async ({ user, ExampleSecondTestFixture }, use) => {
      await user.page.goto(`${previewUrl}/home`);

      await use(true);
    },
    { scope: "test", timeout: 60000 },
  ],
});

ExampleThirdTest(
  `User expects to be on route /home`,
  async ({ user, ExampleThirdTestFixture }) => {
    const User = user.PO;
    expect(await User.routeIncludes({ route: "/home" })).toBeFalsy();
  },
);
