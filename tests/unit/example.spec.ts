// Array<>
// Number Array
const arrNumber: number[] = [1, 2, 3];

// String Array
const arrString: string[] = ["1", "2", "3"];
const readOnly: Readonly<string[]> = ["1", "2", "3"];

// readOnly[1] = "3"; //  error: index signature only permits reading

// Tuple array - defined type and array length
const tuple: [number, string, boolean] = [1, "Kurniawan", true];

// tuple[0] = "Satu"; // error bacaussse the type has to be number as defined.

// tuple can be readonly

const readOnlyTuple: readonly [number, string, boolean] = [
  1,
  "Kurniawan",
  true,
];
// readOnlyTuple[1] = "Saputro"; // cannot assign because readonly

// destructuring tuple
const [id, username, userStatus] = readOnlyTuple;

describe("Array", () => {
  it("test array", () => {
    expect(arrNumber).toEqual([1, 2, 3]);
    expect(arrString).not.toEqual([1, 2, 3]);
    expect(id).toBe(1);
    expect(username).toMatch("Kurniawan");
    expect(userStatus).toBeTruthy();
  });
});
