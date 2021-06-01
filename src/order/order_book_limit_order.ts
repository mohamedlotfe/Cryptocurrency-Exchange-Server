import { OrderBook } from './entities/order-Book.enitiy';
import { Order } from './entities/order.entity';
import { Trade } from './entities/trade.entity';

export class BookLimitOrder extends OrderBook {
  constructor() {
    super();
  }

  process(order: Order) {
    if (order.side == '1') {
      return this.processLimitBuy(order);
    }
    return this.processLimitSell(order);
  }

  processLimitBuy(order) {
    let trades: Trade[] = [];
    let sellOderLen = this.SellOrders.length || 0;

    // check if we have at least one matching order
    if (
      sellOderLen > 0 ||
      this.SellOrders.findIndex((s_order) => s_order.price <= order.price) > -1
    ) {
      for (let index = 0; index < this.SellOrders.length; index++) {
        const sellOrder = this.SellOrders[index];

        if (sellOrder.price > order.price) {
          break;
        }

        // fill the entire order
        if (sellOrder.amount >= order.amount) {
          trades.push(
            new Trade(order.id, sellOrder.id, order.amount, sellOrder.price),
          );
          sellOrder.amount -= order.amount;
          if (sellOrder.amount == 0) {
            this.removeSellOrder(sellOrder.id);
          }
          return trades;
        }
        // fill a partial order and continue
        if (sellOrder.amount < order.amount) {
          trades.push(
            new Trade(order.id, sellOrder.id, order.amount, sellOrder.price),
          );
          order.amount -= sellOrder.amount;
          this.removeSellOrder(sellOrder.id);
          continue;
        }

        // finally add the remaining order to the list
        this.addBuyOrder(order);
        return trades;
      }
    }
  }

  processLimitSell(order) {
    let trades: Trade[] = [];
    let buyOrderLen = this.BuyOrders.length || 0;

    // check if we have at least one matching order
    if (
      buyOrderLen > 0 ||
      this.BuyOrders.findIndex((s_order) => s_order.price >= order.price) > -1
    ) {
      // traverse all orders that match
      for (let index = 0; index < this.BuyOrders.length; index++) {
        const buyOrder = this.BuyOrders[index];

        if (buyOrder.price < order.price) {
          break;
        }

        // fill the entire order
        if (buyOrder.amount >= order.amount) {
          trades.push(
            new Trade(order.id, buyOrder.id, order.amount, buyOrder.price),
          );
          buyOrder.amount -= order.amount;
          if (buyOrder.amount == 0) {
            this.removeBuyOrder(buyOrder.id);
          }
          return trades;
        }
        // fill a partial order and continue
        if (buyOrder.amount < order.amount) {
          trades.push(
            new Trade(order.id, buyOrder.id, order.amount, buyOrder.price),
          );
          order.amount -= buyOrder.amount;
          this.removeBuyOrder(buyOrder.id);
          continue;
        }

        // finally add the remaining order to the list
        this.addSellOrder(order);
        return trades;
      }
    }
  }
}
