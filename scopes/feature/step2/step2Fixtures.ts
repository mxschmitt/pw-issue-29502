import { mergeTests } from "@playwright/test";
import { BaseConfiguration } from "../../config";
import { ExampleFirstTest } from "../step1Fixtures";
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
