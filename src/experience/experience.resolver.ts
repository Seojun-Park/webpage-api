import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExperienceService } from './experience.service';
import { Experience } from './entities/experience.entity';
import { CreateExperienceInput } from './dto/create-experience.input';
import { UpdateExperienceInput } from './dto/update-experience.input';

@Resolver(() => Experience)
export class ExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) {}

  @Mutation(() => Experience)
  createExperience(@Args('createExperienceInput') createExperienceInput: CreateExperienceInput) {
    return this.experienceService.create(createExperienceInput);
  }

  @Query(() => [Experience], { name: 'experience' })
  findAll() {
    return this.experienceService.findAll();
  }

  @Query(() => Experience, { name: 'experience' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.experienceService.findOne(id);
  }

  @Mutation(() => Experience)
  updateExperience(@Args('updateExperienceInput') updateExperienceInput: UpdateExperienceInput) {
    return this.experienceService.update(updateExperienceInput.id, updateExperienceInput);
  }

  @Mutation(() => Experience)
  removeExperience(@Args('id', { type: () => Int }) id: number) {
    return this.experienceService.remove(id);
  }
}
