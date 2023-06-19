import { Field, InputType } from "@nestjs/graphql";
import { IsNumber, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateUserInput {

    @Field()
    @IsNumber()
    @IsOptional()
    age?: number;

    @Field()
    @IsString()
    @IsOptional()
    email?: string;
}