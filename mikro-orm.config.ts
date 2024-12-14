import { defineConfig } from '@mikro-orm/sqlite';
import { LoadStrategy } from '@mikro-orm/core';
import { SeedManager } from '@mikro-orm/seeder';

export default defineConfig({
  entities: ['./entities'], // path to your entity files
  dbName: 'products_db',
  debug: process.env.NODE_ENV === 'development',
  loadStrategy: LoadStrategy.JOINED,
});