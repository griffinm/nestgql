import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";
import { AuthorBaseDTO } from "./author-base.dto";

@InputType()
export class CreateAuthorInput extends AuthorBaseDTO {

}
