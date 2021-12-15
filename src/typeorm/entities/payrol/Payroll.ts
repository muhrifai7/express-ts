import { create } from '../../../controllers/users/create';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne
  } from 'typeorm';
  import User from "../users/User"
  
  @Entity()
  class Salary {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column()
    nip!: string;

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

  }
  
  export default Salary;