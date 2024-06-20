import { apiToFinancialProduct } from "@/adapters";
import { BankAPI } from "@/api/config";
import { FinancialProduct, FinancialProductAPI } from "@/interfaces";

export const financialProductAPI = {
  getFinancialProducts: async (): Promise<FinancialProduct[]> => {
    const response = await BankAPI.get("/bp/products");
    const mappedFinancialProducts = apiToFinancialProduct(response.data);
    return mappedFinancialProducts;
  },
  createFinanciaProduct: async (
    product: FinancialProductAPI
  ): Promise<FinancialProduct> => {
    const response = await BankAPI.post("/bp/products", {
      ...product
    });
    const [mappedFinancialProduct] = apiToFinancialProduct([response.data]);
    return mappedFinancialProduct;
  },
  updateFinanciaProduct: async (
    product: FinancialProductAPI
  ): Promise<FinancialProduct> => {
    const response = await BankAPI.put("/bp/products", {
      ...product
    });
    const [mappedFinancialProduct] = apiToFinancialProduct([response.data]);
    return mappedFinancialProduct;
  },
  deleteFinancialProduct: async (productId: string): Promise<string> => {
    const response = await BankAPI.delete(`/bp/products?id=${productId}`);
    return response.data;
  },
  checkIfIdExists: async (id: string): Promise<Boolean> => {
    const response = await BankAPI.get(`/bp/products/verification?id=${id}`);
    return response.data;
  }
};
