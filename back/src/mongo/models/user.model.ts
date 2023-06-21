import { Schema } from 'mongoose';
import conn from '../initializeMongo';
import envConfig from '../../config/env.config';

const userSchema = new Schema(
  {
    userName: String,
    password: String,
    credits: { type: Number, min: 0 },
  },
  {
    versionKey: false,
  }
);

const userModel = conn.model(envConfig.mongo.collection.user, userSchema);

export default userModel;
