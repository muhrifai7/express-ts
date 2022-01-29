import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    OneToOne,
    JoinColumn
  } from 'typeorm';
  
  import { User } from '../users/User';
  import { Permission } from '../permission/Permission';
  
  @Entity()
  export class Role {
    @PrimaryGeneratedColumn()
    id!: string;
  
    @Column({
      unique: true,
    })
    name!: string;
  
    @Column()
    description!: string;
  
    @CreateDateColumn()
    created_at!: string;
  
    @UpdateDateColumn()
    updated_at!: string;

    @OneToOne(() => User, user => user.role) // specify inverse side as a second parameter
    user!: User;
    
    @OneToOne(() => Permission, (permission) => permission.role)
    permission!: Permission;
  }