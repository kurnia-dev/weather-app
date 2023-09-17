// Interface

interface Time {
  day: string;
  date: number;
  readonly month: string; // cannot modified
  year?: number; // optional
}

// interface function

interface Sum {
  (num1: number, num2: number): number;
}

test("inteerfacee teetst", () => {
  const newTime: Time = {
    day: "Sunday",
    date: 16,
    month: "May", // read only
    year: 2022,
  };

  //   newTime.month = "July"; // error - reasssign to read only proppperty

  expect(newTime).toHaveProperty("month");
  expect(newTime.month).toMatch("May");
  expect(newTime.month).not.toMatch("July");
});

test("interface function ", () => {
  const Sum: Sum = (a: number, b: number): number => {
    return a + b;
  };

  expect(Sum(10, 21)).toBe(31);
});
