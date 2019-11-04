import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class App {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  data: string;
}