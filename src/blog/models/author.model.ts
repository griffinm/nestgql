import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Author as AuthorDB } from '@prisma/client';
import { Contains } from 'class-validator';

@ObjectType({ description: 'Author model' })
export class Author {
  @Field(type => ID)
  id: AuthorDB['id'];

  @Field(() => String)
  firstName: AuthorDB['firstName']

  @Field(() => String)
  lastName?: AuthorDB['lastName'];
}
