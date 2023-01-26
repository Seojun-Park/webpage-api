import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { DatabaseModule } from '../database/database.module';
import { User } from './user';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, UserService, User],
})
export class UserModule {}
