import { OrderType } from './order-type.entity';
import { Order } from './order.entity';

export class SellOrder extends Order {
  constructor(side, price, amount) {
    super(side, price, amount, OrderType.SELL);
  }
}
