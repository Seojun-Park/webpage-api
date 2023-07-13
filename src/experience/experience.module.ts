import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { ExperienceResolver } from './experience.resolver';

@Module({
  providers: [ExperienceResolver, ExperienceService]
})
export class ExperienceModule {}
