import { create } from '../../../controllers/users/create';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';

import {User} from "../users/User"
import { UserTax } from './../userTax/UserTax';

@Entity()
export class Salaries {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  overtimePay!: number;
  // persentase
  @Column()
  allowance!: string;

  @Column({
    nullable : true
  })
  additional!: string;

  @Column({
    nullable : true
  })
  created_by!: string;

  @Column({
    nullable : true
  })
  updated_by!: string;

  @CreateDateColumn()
  created_at!: string;

  @UpdateDateColumn()
  updated_at!: string;

  @OneToOne(() => User, user => user.salaries)
  user!: User;

  @OneToOne(() => UserTax, userTax => userTax.salaries) 
  @JoinColumn()
  userTax!: UserTax;
}