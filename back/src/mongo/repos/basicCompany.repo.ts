import basicCompanyModel from '../models/companyBasic.model';

export const basicCompany = async () => {
  const basicCompany = await basicCompanyModel.find({});

  return basicCompany;
};
