import { IsNotEmpty } from 'class-validator';

export class CreateCalculationDto {
  @IsNotEmpty()
  expression!: string;
}