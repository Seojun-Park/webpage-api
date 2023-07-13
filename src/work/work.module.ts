import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkResolver } from './work.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Work, WorkSchema } from './entities/work.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Work.name, schema: WorkSchema }]),
  ],
  providers: [WorkResolver, WorkService],
})
export class WorkModule {}
