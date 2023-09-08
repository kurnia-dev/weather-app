// const getIsoTime = require("../../src/tools/getIsoTime");
import getIsoTime from "@/tools/getIsoTime";

describe("getIsoTime", () => {
  test("should return the expected format", () => {
    const isoTime = getIsoTime();
    const isoTimePattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/; // yyyy-mm-ddThh:mm

    expect(isoTime).toMatch(isoTimePattern);
  });
});