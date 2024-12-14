import { MikroORM, RequestContext } from '@mikro-orm/sqlite';
import defineConfig from '../../mikro-orm.config.ts';
import { Product } from '../../entities/Product.ts';

let _orm: MikroORM;

export async function getORM() {
  if (!_orm) {
    _orm = await MikroORM.init(defineConfig);
    console.log(_orm.em); // access EntityManager via `em` property
    console.log(_orm.schema);
  }
  _orm.em.create(Product, {
    id: 1,
    name: "book",
    description: "read",
    price: 1.00,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdINdFa3_zI4GA78LmJ1z9xUfmvg-HtUGNKQ&s"
  });
  return _orm;
}

export async function runWithContext<T>(callback: () => Promise<T>): Promise<T> {
  const orm = await getORM();
  return RequestContext.create(orm.em, callback);
}

// Optional: Handle cleanup on app shutdown
process.on('beforeExit', async () => {
  if (_orm) {
    await _orm.close();
  }
});