import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
  } from 'typeorm';
  import {User} from "../users/User"
  
  @Entity()
  export class Modules {
    @PrimaryGeneratedColumn()
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

    @ManyToOne(() => User, user => user.module) // specify inverse side as a second parameter
    user!: User;
  }