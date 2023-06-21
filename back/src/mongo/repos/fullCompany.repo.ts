import fullCompanyModel from '../models/companyFull.model';

export const fullCompany = async () => {
  const fullCompany = await fullCompanyModel.find({});

  return fullCompany;
};

export const fullCompanyByName = async (name: string) => {
  const company = await fullCompanyModel.findOne({ name });

  return company;
};
