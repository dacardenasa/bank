import { FinancialProduct, FinancialProductAPI } from "@/interfaces";
import { formatDate } from "@/utils";

export const apiToFinancialProduct = (
  financialProducts: FinancialProductAPI[]
): FinancialProduct[] => {
  if (!financialProducts.length) return [];
  return financialProducts.map((product) => ({
    ...product,
    releaseDate: formatDate(new Date(product.date_release)),
    checkingDate: formatDate(new Date(product.date_revision))
  }));
};
