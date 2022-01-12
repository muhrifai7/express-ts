import bcrypt from 'bcryptjs';
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToOne,
    JoinColumn,
    OneToMany
   } from 'typeorm';

import {Role} from '../roles/Role';
import {Profile} from "../profile/Profile";
import {Department} from "../department/Department"
import {Modules} from "../modules/Modules"
import {EmailBlast} from '../emailBlast/EmailBlast';
import { RoleType, Language } from './userTypes';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    unique: true,
  })
  email!: string;

  @Column()
  password!: string;

  @Column({
    default : true as boolean
  })
  isActive!: boolean;

  @Column({
    nullable: true,
  })
  username!: string;

  @Column({
    nullable: true,
    unique: true,
  })
  nip!: string;

  @Column({
    default : "STANDARD" as RoleType
  })
  role_name!: string;

  @Column({
    default: 'en-US' as Language,
    length: 15,
  })
  language!: string;

  @Column()
  @CreateDateColumn()
  created_at!: Date;

  @Column()
  @UpdateDateColumn()
  updated_at!: Date;

  @OneToOne(() => Profile, profile => profile.user) 
  profile!: Profile;

  @OneToOne(() => Role, role => role.user) // specify inverse side as a second parameter
  @JoinColumn()
  role!: Role;

  @OneToOne(() => Department, department => department.user)
  @JoinColumn()
  department!: Department;

  @OneToMany(() => Modules, module => module.user)
  @JoinColumn()
  module!: Modules[];

  @OneToMany(() => EmailBlast, email => email.user)
  emailBlast!: EmailBlast[];

  setLanguage(language: Language) {
    this.language = language;
  }

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfPasswordMatch(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}