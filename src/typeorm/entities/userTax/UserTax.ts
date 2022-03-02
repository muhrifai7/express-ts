import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    OneToOne,
    JoinColumn,
    Tree
} from 'typeorm';

import { Salaries } from '../salaries/Salaries';

    @Entity()
    export class UserTax {
    @PrimaryGeneratedColumn()
    id!: string;
    
    @OneToOne(() => Salaries, salaries => salaries.userTax)
    salaries!: Salaries;

    @Column({
        nullable : true
    })
    name!: string;
    // persentase
    @Column()
    tax!: string;
    // persentase
    @Column()
    bpjs!: string;

    @Column({
        nullable : true
    })
    description!: string;
        
    @CreateDateColumn()
    created_at!: string;

    @UpdateDateColumn()
    updated_at!: string;
}