import { expressAPI } from './app';
import { AppDataSource } from './dataSource';
import { logger } from './helpers/logger';
import { redisClient } from '../redis/client';

const port = Number(process.env.PORT) || 4000;
AppDataSource.initialize()
  .then(async () => {
    logger.info('Database connected successfully!');
    redisClient.on('error', err => logger.error(`Redis Client Error: ${err}`));

    await redisClient.connect();
    logger.info('Redis connected successfully!');
    expressAPI().listen(port, () => {
      logger.info(`Server started! on port ${port}`);
    });
  })
  .catch(err => {
    logger.error(`Error during Database connection: ${err}`);
  });
