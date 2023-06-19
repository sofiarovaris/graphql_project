import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@ObjectType()
@Entity('hobby')
export class Hobby {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Field()
    @Column({ type: 'varchar' })
    name: string;

    @Field()
    @Column({ type: 'varchar' })
    description: string;

    @Field(() => User)
    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;
}