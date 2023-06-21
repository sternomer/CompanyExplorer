import { connect } from './mongo/initializeMongo';
import config from './config/env.config';
import app from './app';

const { mongo } = config;

/**
 * The main function.
 * Calls all the initialization functions.
 */
const main = async () => {
  await connect(mongo.uri);

  app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
  });
};

main().catch((err) => {
  console.log(err);
  process.exit();
});
