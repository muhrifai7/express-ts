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
  
  import Permission from '../permission/Permission';
  import User from '../users/User';
  
  @Entity()
  class Role {
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

    @OneToOne(() => User, user => user.role) // specify inverse side as a second parameter
    user!: User;
    
    // @OneToMany(() => Permission, (permission) => permission.id)
    // permissionId!: Permission[];
  }
  
  export default Role;