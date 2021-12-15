import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne
  } from 'typeorm';

  import Role from "../roles/Role"
  
  @Entity()
  class Permission {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column()
    name!: string;
  
    @Column()
    description!: string;
  
    @CreateDateColumn()
    created_at!: string;
  
    @UpdateDateColumn()
    updated_at!: string;

    // @OneToOne(() => Role, (role) => role.id)
    // roleId!: Role;

  }
  
  export default Permission;