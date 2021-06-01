import { BuyOrder } from './buy-order.entity';
import { SellOrder } from './sell-order.entity';

export class OrderBook {
  constructor(public BuyOrders: BuyOrder[] = [], public SellOrders: SellOrder[]=[]) {}

  // Add a buy order to the order book
  addBuyOrder(buyOrder: BuyOrder) {
    this.BuyOrders.push(buyOrder);
    this.BuyOrders.sort((a, b) => (a.price > b.price ? 1 : -1));
  }

  // Add a sell order to the order book
  addSellOrder(sellOrder: SellOrder) {
    this.SellOrders.push(sellOrder);
    this.SellOrders.sort((a, b) => (a.price > b.price ? 1 : -1));
  }

  removeBuyOrder(id) {
    this.BuyOrders.splice(this.SellOrders.findIndex(id), 1);
  }
  removeSellOrder(id) {
    this.SellOrders.splice(this.SellOrders.findIndex(id), 1);
  }
}
