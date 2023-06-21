import { Schema } from 'mongoose';
import conn from '../initializeMongo';
import envConfig from '../../config/env.config';

const basicCompanySchema = new Schema(
  {
    name: { type: String, unique: true },
    website: String,
    size: String,
    location: String,
  },
  {
    versionKey: false,
  }
);

const basicCompanyModel = conn.model(envConfig.mongo.collection.basicCompany, basicCompanySchema);

export default basicCompanyModel;
