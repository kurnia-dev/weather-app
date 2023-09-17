// extending interfaces
interface Employee {
  id: string;
  name: string;
}

interface Manager extends Employee {
  employesCount: number;
}

test("Extending interface test", () => {
  const manager: Manager = {
    id: "113dwyjf32",
    name: "Kurniawan Saputro",
    employesCount: 12,
  };
  expect(manager).toHaveProperty("id");
});
