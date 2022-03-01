import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne
  } from 'typeorm';
  import {User} from "../users/User"
  
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

    @OneToOne(() => User, user => user.department) // specify inverse side as a second parameter
    user!: User;
  }

  