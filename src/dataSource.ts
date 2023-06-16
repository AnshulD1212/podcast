import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url:
    process.env.DB_URL ||
    'postgres://postgres:postgres@localhost:5432/podcasts',
  synchronize: true,
  logging: true,
  entities: ['/src/models/*.model.ts'],
  subscribers: [],
  migrations: ['./src/migrations/*.ts'],
  migrationsTableName: 'migrations',
  namingStrategy: new SnakeNamingStrategy()
});
