import Time from "@/types/time";

interface LocalTime extends Time {
  timeZone: string;
  formatTime(): string;
}

describe("Test function in interface", () => {
  const localTime: LocalTime = {
    date: 12,
    day: "Sunday",
    month: "May",
    year: 2022,
    timeZone: "WIB",
    formatTime() {
      return this.date + " " + this.day;
    },
  };
  test("should return the correct format", () => {
    expect(localTime.formatTime()).toMatch("12 Sunday");
  });
});
