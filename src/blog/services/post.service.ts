import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Post } from "@prisma/client";

@Injectable()
export class PostService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getPost(params: { id: number }) : Promise<Post | null> {
    const { id } = params;
    return this.prisma.post.findUnique({ where: { id } });
  }

  async getPosts(params: { skip?: number; take?: number; cursor?: { id: number }; where?: any; orderBy?: any }): Promise<Post[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.post.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
