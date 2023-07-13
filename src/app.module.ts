import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';
import { WorkModule } from './work/work.module';
import { ExperienceModule } from './experience/experience.module';

@Module({
  imports: [CommonModule, UserModule, WorkModule, ExperienceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
