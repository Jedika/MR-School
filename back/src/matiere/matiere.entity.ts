import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Matiere {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Field()
  @Column({ nullable: false, unique: true })
  designation: string;
}