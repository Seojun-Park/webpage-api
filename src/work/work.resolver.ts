import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorkService } from './work.service';
import { Work } from './entities/work.entity';
import { CreateWorkInput } from './dto/create-work.input';
import { UpdateWorkInput } from './dto/update-work.input';
import { WorksReturnType } from '../common/dto/returnType.dto';
import { PaginationArgs } from '../common/dto/paginate.input';

@Resolver(() => Work)
export class WorkResolver {
  constructor(private readonly workService: WorkService) {}

  @Mutation(() => Work)
  async createWork(@Args('args') args: CreateWorkInput) {
    return await this.workService.create(args);
  }

  @Query(() => WorksReturnType, { name: 'works' })
  async findAll(
    @Args('args', { nullable: true }) args?: PaginationArgs,
  ): Promise<WorksReturnType> {
    return await this.workService.findAll(args);
  }

  @Query(() => Work, { name: 'work' })
  async findOne(
    @Args('_id', { type: () => String }) _id: string,
  ): Promise<Work> {
    return this.workService.findOne(_id);
  }

  @Mutation(() => Work)
  async updateWork(@Args('args') args: UpdateWorkInput): Promise<Work> {
    return await this.workService.update(args);
  }

  @Mutation(() => Work)
  async removeWork(@Args('_id', { type: () => String }) _id: string) {
    return this.workService.remove(_id);
  }
}
