import { previewUrl } from "@/testing/playwright.config";
import { expect, mergeTests } from "@playwright/test";
import { BaseConfiguration } from "../config";

export const ExampleFirstTest = mergeTests(BaseConfiguration).extend<{
  ExampleFirstTestFixture: true;
}>({
  ExampleFirstTestFixture: [
    async ({ user }, use) => {
      await user.page.goto(`${previewUrl}/button`);

      await use(true);
    },
    { scope: "test", timeout: 60000 },
  ],
});

