import { test as base, chromium, Page } from "@playwright/test";
import { PageObjectModel } from "../utils/pageObjectModel";

export interface BaseConfigurationOptions {
  user: {
    id: string;
    page: Page;
    PO: PageObjectModel;
  };
}

export const BaseConfiguration = base.extend<BaseConfigurationOptions>({
  context: [
    async ({ baseURL }, use) => {
      const context = await chromium.launchPersistentContext(
        "",
        BrowserOptions,
      );
      await use(context);
    },
    { scope: "test" },
  ],
  user: [
    async ({ context }, use) => {
      const page = await context.newPage();
      const userId = "123";

      const PO = new PageObjectModel({ page });

      await use({ id: userId, page, PO });
    },
    { scope: "test" },
  ],
});

export const BrowserOptions = {
  logger: {
    isEnabled: (browserName: string, severity: string) =>
      browserName === "chromium" && severity === "error",
    log: (browserName: any, severity: string, message: any, args: any) =>
      severity === "error" && console.error(`${browserName} ${message}`),
  },
  slowMo: 30,
  headless: true,
  args: [`--use-fake-device-for-media-stream`, `--mute-audio`],
  permissions: ["camera", "microphone"],
};
