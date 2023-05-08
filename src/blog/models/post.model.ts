import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Author } from './author.model';

@ObjectType({ description: 'Post model' })
export class Post {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(type => Date)
  createdAt: Date;

  @Field()
  authorId: string;
}
