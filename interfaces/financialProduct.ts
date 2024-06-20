export type FinancialProduct = {
  id: string;
  name: string;
  description: string;
  logo: string;
  releaseDate: string;
  checkingDate: string;
};

export type FinancialProductAPI = {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: Date;
  date_revision: Date;
}
