import { Field, InputType } from "@nestjs/graphql";
import { IsNumber, IsString } from "class-validator";

@InputType()
export class CreateUserInput {

    @IsString()
    @Field()
    name: string;

    @IsNumber()
    @Field()
    age: number;

    @IsString()
    @Field()
    email: string;
}