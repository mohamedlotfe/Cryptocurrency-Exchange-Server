export class Trade {
  constructor(
    public takerOrderID: string,
    public makerOrderID: string,
    public amount: number,
    public price: number,
  ) {}
}
