import {Entity, PrimaryGeneratedColumn, Column,OneToOne,CreateDateColumn,UpdateDateColumn} from "typeorm";
import User from "../users/User"

@Entity()
export default class Profile {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    placeOfBirth!: string;

    @Column()
    dateOfBirth!: string;

    @Column()
    gender!: string;

    @Column()
    religion!: string;

    @Column()
    academic!: string;

    @Column()
    title!: string;

    @Column()
    address!: string;

    @Column()
    city!: string;

    @Column()
    country!: string;

    @Column()
    postalCode!: string;

    @Column()
    photo!: string;

    @CreateDateColumn()
    createdAt!: string;
  
    @UpdateDateColumn()
    updated_at!: string;

    @OneToOne(() => User, user => user.profile) // specify inverse side as a second parameter
    user!: User;

}