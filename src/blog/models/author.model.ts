import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType({ description: 'Author model' })
export class Author {
  @Field(type => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
