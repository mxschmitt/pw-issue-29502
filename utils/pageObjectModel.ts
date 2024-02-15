import { Locator, Page } from "@playwright/test";

export class PageObjectModel {
  public page: Page;
  public button: Locator;
  public successMessage: Locator;
  constructor({ page }: { page: Page }) {
    this.page = page;
    this.button = page.getByTestId(`buttons-here`)
    this.successMessage = page.getByTestId(`success-message-h1`)
  }
  async routeIncludes({route}: {route: string}) {
    await this.page.waitForURL((url) => {
      return url.pathname.includes(`${route}`);
   });
  }
  // async routeExcludes({route}: {route: string}) {
  //   await this.page.waitForURL((url) => {
  //     return url.pathname.endsWith(`${route}`);
  //  });
  // }
}
