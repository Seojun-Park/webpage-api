import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExperienceService } from './experience.service';
import { Experience } from './entities/experience.entity';
import { CreateExperienceInput } from './dto/create-experience.input';
import { UpdateExperienceInput } from './dto/update-experience.input';
import { ExperiencesReturnType } from '../common/dto/returnType.dto';
import { PaginationArgs } from '../common/dto/paginate.input';

@Resolver(() => Experience)
export class ExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) {}

  @Mutation(() => Experience)
  async createExperience(@Args('args') args: CreateExperienceInput) {
    return await this.experienceService.create(args);
  }

  @Query(() => ExperiencesReturnType, { name: 'experiences' })
  async findAll(
    @Args('args', { nullable: true }) args?: PaginationArgs,
  ): Promise<ExperiencesReturnType> {
    return await this.experienceService.findAll(args);
  }

  @Query(() => Experience, { name: 'experience' })
  async findOne(
    @Args('_id', { type: () => String }) _id: string,
  ): Promise<Experience> {
    return await this.experienceService.findOne(_id);
  }

  @Mutation(() => Experience)
  async updateExperience(
    @Args('args') args: UpdateExperienceInput,
  ): Promise<Experience> {
    return await this.experienceService.update(args);
  }

  @Mutation(() => Experience)
  async removeExperience(@Args('_id', { type: () => String }) _id: string) {
    return await this.experienceService.remove(_id);
  }
}
