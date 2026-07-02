import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

import { User } from '../../auth/entities/user.entity';

@Entity()
export class Calculation {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column('double', { nullable: true })
num1!: number;

  @Column('double', { nullable: true })
num2!: number;

  @Column({ nullable: true })
operation!: string;

  @Column('double')
  result!: number;

  @Column()
  expression!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToOne(
    () => User,
    (user) => user.calculations,
    {
      onDelete: 'CASCADE',
    },
  )
  user!: User;
}