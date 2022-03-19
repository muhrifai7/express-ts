import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  Tree,
} from "typeorm";

import { User } from "../users/User";

@Entity()
export class UserTax {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  user_id!: number;
  @OneToOne(() => User, (user) => user.salaries)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @Column({
    nullable: true,
  })
  name!: string;
  // persentase
  @Column()
  tax!: string;
  // persentase
  @Column()
  bpjs!: string;

  @Column({
    nullable: true,
  })
  description!: string;

  @CreateDateColumn()
  created_at!: string;

  @UpdateDateColumn()
  updated_at!: string;
}
