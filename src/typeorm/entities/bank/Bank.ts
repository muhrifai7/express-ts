import { create } from './../../../controllers/users/create';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne
  } from 'typeorm';
  
  @Entity()
  export class Bank {
    @PrimaryGeneratedColumn()
    id!: string;
  
    @Column()
    name!: string;

    @Column()
    code!: string;

  }