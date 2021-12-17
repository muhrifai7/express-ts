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

  @Column()
  title!: string;

  @Column()
  attendanceDate!: string;

  @Column()
  timeOfEntry!: string;

  @Column()
  timeOfOut!: string;

  @Column()
  totalWorkingDays!: string;

  @Column()
  createdBy!: string;

  @Column()
  updatedBy!: string;

  @CreateDateColumn()
  created_at!: string;

  @UpdateDateColumn()
  updated_at!: string;

}