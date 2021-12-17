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
export class Occupation {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  code!: string;

  @Column()
  name!: number;

  @Column()
  dailyRate!: string;

  @Column()
  montlyRate!: string;

  @Column()
  workingDaysPerMonth!: string;

  @Column()
  updated_by!: string;

  @CreateDateColumn()
  created_at!: string;

  @UpdateDateColumn()
  updated_at!: string;

}