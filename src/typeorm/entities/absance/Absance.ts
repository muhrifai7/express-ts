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
  class Absence {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    from!: string;

    @Column()
    to!: string;

    @Column()
    createdBy!: string;

    @Column()
    updatedBy!: string;
  
    @CreateDateColumn()
    created_at!: string;
  
    @UpdateDateColumn()
    updated_at!: string;

  }
  
  export default Absence;