import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateCoffeeDto {
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @ApiProperty()
  readonly brand: string;

  @IsString({ each: true })
  @ApiProperty()
  readonly flavors: string[];
}
