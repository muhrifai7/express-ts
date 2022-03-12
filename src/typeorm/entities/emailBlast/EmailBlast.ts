import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "../users/User";

@Entity()
export class EmailBlast {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  subject!: string;

  @Column()
  emailType!: string;

  @Column()
  content!: string;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updated_at!: string;

  @ManyToOne(() => User, (user) => user.emailBlast) // specify inverse side as a second parameter
  user!: User;
}
