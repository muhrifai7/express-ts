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
  export class Furlough {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column()
    nik!: string;

    @Column()
    description!: string;

    @Column()
    leaveDate!: string;

    @Column()
    createdBy!: string;

    @Column()
    updatedBy!: string;
  
    @CreateDateColumn()
    created_at!: string;
  
    @UpdateDateColumn()
    updated_at!: string;

  }