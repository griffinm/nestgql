import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@InputType()
export class CreatePostInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String, { description: "The post's title" })
  readonly title: string;

  @IsString()
  @Field(() => String, { description: "The post's content" })
  readonly content: string;

  @IsNumber()
  @Field(() => Number, { description: "The post's author id" })
  readonly authorId: number;
}
