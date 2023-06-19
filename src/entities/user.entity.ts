import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Hobby } from "./hobby.entity";

@ObjectType()
@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Field()
    @Column({ type: 'varchar' })
    name: string;

    @Field()
    @Column({ type: 'int' })
    age: number;

    @Field()
    @Column({ type: 'varchar' })
    email: string;

    @Field(() => [Hobby], { nullable: true })
    @OneToMany(() => Hobby, hobby => hobby.user)
    hobbies: Hobby[];
}