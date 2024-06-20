import { apiToFinancialProduct } from "./index";

const dataAPI = [
  {
    id: "trj-pay",
    name: "Tarjetas PAY",
    description: "Tarjeta PAY con cuota de manejo preferencial",
    logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
    date_release: new Date("2024-06-30"),
    date_revision: new Date("2025-06-30")
  }
];

describe("apiToFinancialProduct", () => {
  test("should return data parsed", () => {
    expect(apiToFinancialProduct(dataAPI).length).toEqual(1);
  });
});
