import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class Building extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  price: number;

  @Column({ field: 'ticket_price' })
  ticketPrice: number;

  @Column
  yield: string;

  @Column
  sold: number;

  @Column({ field: 'days_left' })
  daysLeft: number;

  @Column
  image: string;
}