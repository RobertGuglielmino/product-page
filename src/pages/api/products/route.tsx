import { NextApiHandler } from 'next';
import 'reflect-metadata';
import getEM from '@/utils/getEM.ts';
import {withORM} from '@/utils/withORM.ts';
import { Product } from '@entities/Product.ts';

const handler: NextApiHandler = async (req, res) => {
  const em = getEM();
  const products = await em.find(Product, {});

  console.log(`context-specific em-ID: ${em.id}`);
  
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(products));
};

export default withORM(handler);




// app/api/products/route.ts
// import { getORM, runWithContext } from '@/lib/db.ts';
// import { Product } from '@entities/Product.ts';

// export async function GET() {
//     return runWithContext(async () => {
//         const orm = await getORM();
//         const em = orm.em.fork();
        
//         try {
//             const products = await em.find(Product, {});

//             return Response.json(products)
//         } catch (error) {
//             console.error('API Error:', error)
//             return Response.json(
//                 { error: 'Internal Server Error' }, 
//                 { status: 500 }
//             )
//         }
//     });
// }