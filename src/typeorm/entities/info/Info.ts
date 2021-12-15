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
  class Info {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column()
    title!: string;

    @Column()
    subtitle!: string;

    @Column()
    imageUrl!: string;

    @Column()
    content!: string;
  
    @Column()
    createdBy!: string;

    @Column()
    updatedBy!: string;
  
    @CreateDateColumn()
    created_at!: string;
  
    @UpdateDateColumn()
    updated_at!: string;

  }
  
  export default Info;