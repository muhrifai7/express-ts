import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import moment from 'moment';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({
    nullable: true,
  })
  title!: string;

  @Column({
    nullable: true,
  })
  timeOfEntry!: string;

  @Column({
    nullable: true,
  })
  timeOfOut!: string;

  @Column({
    nullable: true,
  })
  totalWorkingDays!: string;

  @Column({
    nullable: true,
  })
  created_by!: string;

  @Column({
    nullable: true,
  })
  updated_by!: string;

  @CreateDateColumn({
    default : moment(new Date()).format("YYYY-MM-DD")
  })
  created_at!: string;

  @UpdateDateColumn({
    default : moment(new Date()).format("YYYY-MM-DD")
  })
  updated_at!: string;

}