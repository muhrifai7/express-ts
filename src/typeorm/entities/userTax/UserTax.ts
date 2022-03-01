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
    export class UserTax {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({
        unique: true,
    })
    name!: string;
    // persentase
    @Column()
    tax!: string;
    // persentase
    @Column()
    bpjs!: string;

    @Column()
    description!: string;
        
    @CreateDateColumn()
    created_at!: string;

    @UpdateDateColumn()
    updated_at!: string;
}