import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../users/User";

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @CreateDateColumn()
  created_at!: string;

  @UpdateDateColumn()
  updated_at!: string;

  @Column({ nullable: true, default: null })
  user_id!: number;
  @OneToOne(() => User, (user) => user.department)
  @JoinColumn({ name: "user_id" })
  user!: User;
}
