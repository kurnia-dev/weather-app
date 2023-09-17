// union | or
let union: number | string | boolean | Array<string> = "string"; // the type used now is string

union = "kurnia";

console.log(union);


function unionParam(val: string | number) {
  if (typeof val === "string") {
    return val.toUpperCase();
  } else {
    return val.toString();
  }
}


test("Should be uppercased", () => {
    expect(unionParam("kurnia")).toBe("KURNIA")
})