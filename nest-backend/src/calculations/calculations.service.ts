import {
  Injectable,
  BadRequestException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';

import { Calculation } from './entities/calculation.entity';
import { User } from '../auth/entities/user.entity';
import { CreateCalculationDto } from './dto/create-calculation.dto';

@Injectable()
export class CalculationsService {
  constructor(
    @InjectRepository(Calculation)
    private calculationRepository: Repository<Calculation>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(
    createCalculationDto: CreateCalculationDto,
    userId: string,
  ) {
    const { expression } = createCalculationDto;

    try {
      const mathResult = eval(expression);

      if (!isFinite(mathResult) || isNaN(mathResult)) {
        throw new Error();
      }

const user = await this.userRepository.findOne({
  where: {
    id: Number(userId),
  },
});

if (!user) {
  throw new BadRequestException('User not found');
}

if (!user) {
  throw new BadRequestException('User not found');
}

const calculation = this.calculationRepository.create({
  expression,
  result: mathResult,
  user,
});
      return await this.calculationRepository.save(calculation);
    } catch {
      throw new BadRequestException(
        'Invalid mathematical expression',
      );
    }
  }

  async findAll(
    userId: string,
    page = 1,
    limit = 5,
    search = '',
    sort = 'desc',
  ) {
    const [history, total] =
      await this.calculationRepository.findAndCount({
        where: {
          user: {
            id: Number(userId),
          },
          expression: Like(`%${search}%`),
        },

        order: {
          createdAt:
            sort === 'asc'
              ? 'ASC'
              : 'DESC',
        },

        skip: (page - 1) * limit,

        take: limit,

        relations: ['user'],
      });

    return {
      history,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    };
  }

  async remove(
    id: string,
    userId: string,
  ) {
    return await this.calculationRepository.delete({
      id: Number(id),
      user: {
        id: Number(userId),
      },
    });
  }

  async removeAll(userId: string) {
    return await this.calculationRepository.delete({
      user: {
        id: Number(userId),
      },
    });
  }
}