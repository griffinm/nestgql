import { Field, InputType } from "@nestjs/graphql";
import { IsNumber, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateAuthorInput {
  @IsNumber()
  @Field(() => Number, { description: "The author's id" })
  readonly id: number;

  @IsString()
  @IsNumber()
  @Field(() => String, { description: "The author's first name" })
  readonly firstName?: string;
  
  @IsOptional()
  @Field(() => String, { description: "The author's last name" })
  readonly lastName?: string;
}
