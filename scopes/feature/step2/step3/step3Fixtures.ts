import { previewUrl } from "@/testing/playwright.config";
import { BaseConfiguration } from "@/testing/scopes/config";
import { mergeTests } from "@playwright/test";
import { ExampleSecondTest } from "../step2Fixtures";

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
