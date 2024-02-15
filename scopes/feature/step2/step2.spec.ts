import { expect, mergeTests } from "@playwright/test";
import { BaseConfiguration } from "../../config";
import { ExampleFirstTest } from "../step1.spec";
import { previewUrl } from "@/testing/playwright.config";
export const ExampleSecondTest = mergeTests(
  BaseConfiguration,
  ExampleFirstTest,
).extend<{ ExampleSecondTestFixture: true }>({
  ExampleSecondTestFixture: [
    async ({ user, ExampleFirstTestFixture }, use) => {
      const User = user.PO;
      await User.button.click({ force: true });
      await User.page.goto(`${previewUrl}/button/success`);
      await use(true);
    },
    { scope: "test", timeout: 60000 },
  ],
});

ExampleSecondTest(
  `User expects to be on route /success`,
  async ({ user, ExampleSecondTestFixture }) => {
    const User = user.PO;
    expect(await User.routeIncludes({ route: "/success" }));
    expect(await User.successMessage.isVisible());
  },
);
