import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { OrderType } from './order-type.entity';

@Entity()
export class Order  extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: string;
  
  @Column()
  side: string;

  @Column()
  price: number;

  @Column()
  amount: number;

  @Column()
  type: OrderType;

  options: object;
  
  constructor(side, price, amount, type, options = {}) {
    super();
    this.side = side;
    this.price = price;
    this.amount = amount;
    this.type = type;
    this.options = options;
  }

  static get SIDE_LONG() {
    return 'long';
  }

  static get SIDE_SHORT() {
    return 'short';
  }

  static get TYPE_LIMIT() {
    return 'limit';
  }

  static get TYPE_STOP() {
    return 'stop';
  }

  static get TYPE_MARKET() {
    return 'market';
  }

  static get TYPE_TRAILING_STOP() {
    return 'trailing_stop';
  }

  static get OPTION_POST_ONLY() {
    return 'post_only';
  }

  hasAdjustedPrice() {
    return this.options['adjust_price'] === true;
  }

  getId() {
    return this.id;
  }

  isShort() {
    return this.side === Order.SIDE_SHORT;
  }

  isLong() {
    return this.side === Order.SIDE_LONG;
  }

  getPrice() {
    return this.price ? Math.abs(this.price) : undefined;
  }

  getAmount() {
    return this.amount ? Math.abs(this.amount) : undefined;
  }

  getType() {
    return this.type;
  }

  isPostOnly() {
    return this.options && this.options['post_only'] === true;
  }

  isReduceOnly() {
    return this.options && this.options['close'] === true;
  }
}
