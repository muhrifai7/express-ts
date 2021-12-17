import { create } from '../../../controllers/users/create';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne
} from 'typeorm';

import {User} from "../users/User"

@Entity()
export class Salary {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  nip!: string;

  @Column()
  basicSalary!: number;

  @Column()
  overtimePay!: number;

  @Column()
  tax!: number;

  @Column()
  jamsostek!: number;

  @Column()
  allowance!: number;

  @Column()
  created_by!: string;

  @Column()
  updated_by!: string;

  @CreateDateColumn()
  created_at!: string;

  @UpdateDateColumn()
  updated_at!: string;

}