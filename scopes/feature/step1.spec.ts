import { expect } from "@playwright/test";
import { ExampleFirstTest } from './step1Fixtures';

ExampleFirstTest(
  `User expects to be on route /button`,
  async ({ user, ExampleFirstTestFixture }) => {
    const User = user.PO;
    expect(await User.routeIncludes({ route: "/button" }));
  },
);
