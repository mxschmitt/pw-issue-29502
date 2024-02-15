import { expect } from "@playwright/test";
import { ExampleThirdTest } from './step3Fixtures';

ExampleThirdTest(
  `User expects to be on route /home`,
  async ({ user, ExampleThirdTestFixture }) => {
    const User = user.PO;
    expect(await User.routeIncludes({ route: "/home" })).toBeFalsy();
  },
);
