import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Post as PostDB } from '@prisma/client';
import { Author } from './author.model';

@ObjectType({ description: 'Post model' })
export class Post {
  @Field(type => ID)
  id: PostDB['id'];

  @Field(type => String)
  title: PostDB['title'];

  @Field(type => String)
  content: PostDB['content'];

  @Field(type => Date)
  createdAt: PostDB['createdAt'];

  @Field(type => Number)
  authorId: PostDB['authorId'];
}
