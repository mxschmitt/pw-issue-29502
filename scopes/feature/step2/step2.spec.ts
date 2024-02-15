import { expect } from "@playwright/test";
import { ExampleSecondTest } from './step2Fixtures';

ExampleSecondTest(
  `User expects to be on route /success`,
  async ({ user, ExampleSecondTestFixture }) => {
    const User = user.PO;
    expect(await User.routeIncludes({ route: "/success" }));
    expect(await User.successMessage.isVisible());
  },
);
