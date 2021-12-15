import { create } from './../../../controllers/users/create';
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
  class Bank {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column()
    name!: string;

    @Column()
    code!: string;

  }
  
  export default Bank;