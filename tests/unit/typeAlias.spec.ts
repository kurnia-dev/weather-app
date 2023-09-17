// type alias for union
export type ID = string | number;

// optional properties

type Category = {
  name: string;
  description?: string;
};

test("test the id", () => {
    const id: ID = 21212;
    const category = {
        name: "Person"
    }
    expect(id).toBeTruthy();
    expect(category).toHaveProperty("name")
});
