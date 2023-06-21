import mongoose, { ConnectOptions } from 'mongoose';

const opts: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

const conn = mongoose.createConnection();

/**
 * Connect to mongo
 */
export const connect = async (uri: string) => {
  console.log('Connecting to Mongo');

  await conn.openUri(uri, opts);

  console.log('Mongo connection established');
};

export default conn;
