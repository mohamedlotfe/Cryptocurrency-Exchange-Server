import { EntityRepository, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { BuyOrder } from './entities/buy-order.entity';
import { Order } from './entities/order.entity';
import { SellOrder } from './entities/sell-order.entity';
import { OrderType } from './entities/order-type.entity';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  constructor() {
    super();
  }
  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    let { side, price, amount } = createOrderDto;
    let order = new Order(
      side,
      price,
      amount,
      side == '1' ? OrderType.BUY : OrderType.SELL,
    );

    await order.save();

    return order;
  }
}
