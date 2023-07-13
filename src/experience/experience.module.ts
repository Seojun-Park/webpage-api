import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { ExperienceResolver } from './experience.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Experience, ExperienceSchema } from './entities/experience.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Experience.name, schema: ExperienceSchema },
    ]),
  ],
  providers: [ExperienceResolver, ExperienceService],
})
export class ExperienceModule {}
