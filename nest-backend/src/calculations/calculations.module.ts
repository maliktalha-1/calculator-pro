import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { CalculationsController } from './calculations.controller';
import { CalculationsService } from './calculations.service';

import { Calculation } from './entities/calculation.entity';
import { User } from '../auth/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Calculation,
      User,
    ]),
    JwtModule.register({}),
  ],
  controllers: [CalculationsController],
  providers: [CalculationsService],
})
export class CalculationsModule {}