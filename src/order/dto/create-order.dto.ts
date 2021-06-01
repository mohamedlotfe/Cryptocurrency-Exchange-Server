import { IsString, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateOrderDto {
    @IsString()
    @MinLength(1)
    @MaxLength(1)
    side: string;
  
    @IsNotEmpty()
    @MinLength(1)
    price: number;
  
    @IsNotEmpty()
    @MinLength(1)
    amount: number;
}
