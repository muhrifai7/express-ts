import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne
  } from 'typeorm';
  import User from "../users/User"
  
  @Entity()
  class SubModules {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column()
    name!: string;

    @Column()
    code!: string;

    @Column()
    canCreate!: string;

    @Column()
    canUpdate!: string;
  
    @Column()
    canRead!: string;

    @Column()
    canDelete!: string;
  
    @CreateDateColumn()
    created_at!: string;
  
    @UpdateDateColumn()
    updated_at!: string;

  }
  
  export default SubModules;