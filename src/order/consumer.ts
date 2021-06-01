import { BuyOrder } from './entities/buy-order.entity';
import { Order } from './entities/order.entity';
import { BookLimitOrder } from './order_book_limit_order';

function consumerMessage(message: Order) {
  if (!message) return message;

  let book = new BookLimitOrder();
  let matchingTrades = book.process(message);
  console.log({ matchingTrades });
}

consumerMessage(new BuyOrder('1', 1200, 2));
