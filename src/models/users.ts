import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryColumnOptions,
  UpdateDateColumn
} from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: 'listener' | 'creator';

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  avatar: string;

  @Column()
  authId: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
