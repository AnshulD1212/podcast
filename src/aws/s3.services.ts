import { S3 } from 'aws-sdk';
import { config } from './config';

const s3 = new S3(config);

export const listBuckets = async () => {
  try {
    const data = await s3.listBuckets().promise();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
