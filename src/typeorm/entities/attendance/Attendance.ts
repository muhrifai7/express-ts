import { create } from './../../../controllers/users/create';
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
export class Attendance {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({
    nullable: true,
  })
  title!: string;

  @Column({
    nullable: true,
  })
  timeOfEntry!: Date;

  @Column({
    nullable: true,
  })
  timeOfOut!: Date;

  @Column({
    nullable: true,
  })
  totalWorkingDays!: string;

  @Column({
    nullable: true,
  })
  created_by!: string;

  @Column({
    nullable: true,
  })
  updated_by!: string;

  @CreateDateColumn()
  created_at!: string;

  @UpdateDateColumn()
  updated_at!: string;

}