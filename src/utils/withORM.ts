import { MikroORM, RequestContext } from '@mikro-orm/core';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import defineConfig from '../mikro-orm.config.ts';
import { Product } from '@entities/Product.ts';

let _orm: MikroORM;

const getORM = async () => {
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
};

export function withORM(handler: NextApiHandler): NextApiHandler {
    return async (req, res) => {
      const orm = await getORM();
      
      return RequestContext.create(orm.em, () => handler(req, res));
    };
  }


// const withORM = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
//     const orm = await getORM();
//     return RequestContext.createAsync(orm.em, async () => handler(req, res));
//   }

// export default withORM;