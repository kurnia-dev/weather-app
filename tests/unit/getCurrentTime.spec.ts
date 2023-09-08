// const getCurrentTime = require("../../src/tools/getCurrentTime");
import getCurrentTime from "@/tools/getCurrentTime";

test("should return with pattern: Sun, Jun 17 2023", () => {
  const pattern = new RegExp(/^([A-Z][a-z]{2}), (\w{3}) (\d{1,2}) (\d{4})$/);
  expect(getCurrentTime()).toMatch(pattern);
});
