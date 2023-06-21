import { Schema } from 'mongoose';
import conn from '../initializeMongo';
import envConfig from '../../config/env.config';

const fullCompanySchema = new Schema(
  {
    name: { type: String, unique: true },
    website: String,
    size: String,
    location: String,
    logo_url: String,
    website_url: String,
    employees_count: Number,
    revenue_in_usd: Number,
    industry: String,
    intent_topic: String,
    intent_dates: [String],
    about: String,
    active_wallets: Number,
    token_name: String,
    tvl_usd: Number,
    smart_contract_count: Number,
  },
  {
    versionKey: false,
  }
);

const fullCompanyModel = conn.model(envConfig.mongo.collection.fullCompany, fullCompanySchema);

export default fullCompanyModel;
