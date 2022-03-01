import { create } from '../../../controllers/users/create';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    OneToOne
  } from 'typeorm';

  import { Salaries } from "../salaries/Salaries"
  
  @Entity()
  export class Payroll {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    totalPay!: number;

    @Column()
    paidDate!: string;

    @Column()
    created_by!: string;

    @Column()
    updated_by!: string;
  
    @CreateDateColumn()
    created_at!: string;
  
    @UpdateDateColumn()
    updated_at!: string;

    @OneToOne(() => Salaries, salaries => salaries.id) 
    salaries!: Salaries;

  }