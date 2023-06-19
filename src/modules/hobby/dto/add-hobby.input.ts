import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class AddHobbyInput {

    @IsString()
    @Field()
    name: string;

    @IsString()
    @Field()
    description: string;
}