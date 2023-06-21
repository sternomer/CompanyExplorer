import './dotenv';

import * as env from 'env-var';

export default {
  port: env.get('PORT').required().asInt(),
  mongo: {
    uri: env.get('MONGO_URI').required().asString(),
    collection: {
      user: env.get('MONGO_COLLECTION_USER').required().asString(),
      basicCompany: env.get('MONGO_COLLECTION_BASIC_COMPANY').required().asString(),
      fullCompany: env.get('MONGO_COLLECTION_FULL_COMPANY').required().asString(),
    },
  },
  jwt: {
    secret: env.get('JWT_SECRET').required().asString(),
  },
};
