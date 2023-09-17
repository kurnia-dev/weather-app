enum CustomerType {
  "SILVER" = "Silver",
  "GOLD" = "Gold",
  "PLATINUM" = "Platinum",
}

type Customer = {
  id: number;
  name: string;
  address: string;
  phone: number;
  type: CustomerType;
};

test("Customer", () => {
  const customer: Customer = {
    id: 21212,
    name: "Kurnia",
      address: "Tapos, Depok",
    phone: 21212121,
    type: CustomerType.GOLD,
  };
    
    expect(customer.type).toBe(2)
    expect(customer.type).toMatch("Gold")
});
