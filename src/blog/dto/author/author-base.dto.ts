import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class AuthorBaseDTO {
  @IsNotEmpty()
  @IsString()
  @Field(() => String, { description: "The author's first name" })
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String, { description: "The author's last name" })
  readonly lastName: string;
}
