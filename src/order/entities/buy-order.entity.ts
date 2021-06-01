import { OrderType } from './order-type.entity';
import { Order } from './order.entity';

export class BuyOrder extends Order {
  constructor(side: string, price: number, amount: number) {
    super(side, price, amount, OrderType.BUY);
  }
}
