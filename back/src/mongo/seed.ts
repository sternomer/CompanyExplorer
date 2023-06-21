import envConfig from '../config/env.config';
import { connect } from './initializeMongo';
import basicCompanyModel from './models/companyBasic.model';
import fullCompanyModel from './models/companyFull.model';
import userModel from './models/user.model';

(async () => {
  await connect(envConfig.mongo.uri);
  const users = require('../../../users.json');
  const basicCompanies = require('../../../basicCompanies.json');
  const fullCompanies = require('../../../fullCompanies.json');

  await userModel.deleteMany({});
  await userModel.insertMany(users);
  console.log('Users inserted');

  await basicCompanyModel.deleteMany({});
  await basicCompanyModel.insertMany(basicCompanies);
  console.log('Basic companies inserted');

  await fullCompanyModel.deleteMany({});
  await fullCompanyModel.insertMany(fullCompanies);
  console.log('Full companies inserted');

  process.exit(0);
})();
