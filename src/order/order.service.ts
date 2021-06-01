import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { BuyOrder } from './entities/buy-order.entity';
import { Order } from './entities/order.entity';
import { SellOrder } from './entities/sell-order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderRepository)
    private ordersRepository: OrderRepository,
  ) {}
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersRepository.createOrder(createOrderDto);
  }

  findAll() {
    return this.ordersRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
