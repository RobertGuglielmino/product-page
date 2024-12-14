import { NextApiHandler } from 'next';
import 'reflect-metadata';
import getEM from '@/utils/getEM.ts';
import { Cart } from '@entities/Cart.ts';
import {withORM} from '@/utils/withORM.ts';

const handler: NextApiHandler = async (req, res) => {
  try {
    const em = getEM();

    console.log(`context-specific em-ID: ${em.id}`);

    const body = await req.body

    const cart = new Cart();
    cart.product = body.product
    cart.quantity = body.quantity
    await em.persistAndFlush(cart);

    return Response.json(cart, { status: 201 })
  } catch (error) {
    console.error('Failed to add cart:', error)
    return Response.json(
    { error: 'Failed to add cart' },
    { status: 500 }
    )
  }
};

export default withORM(handler);