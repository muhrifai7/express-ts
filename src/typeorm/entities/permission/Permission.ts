import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import { Role } from "../roles/Role"

@Entity()
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    default : "READ" as string
  })
  name!: string;

  @Column()
  description!: string;

  @CreateDateColumn()
  created_at!: string;

  @UpdateDateColumn()
  updated_at!: string;

  @ManyToOne(() => Role, role => role.permissions)
  @JoinColumn({ name: "role_id" })
  role!: Role;
}