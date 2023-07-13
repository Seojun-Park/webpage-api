import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersReturnType } from '../common/dto/returnType.dto';
import { PaginationArgs } from '../common/dto/paginate.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('args') args: CreateUserInput) {
    return await this.userService.create(args);
  }

  @Query(() => UsersReturnType, { name: 'users' })
  async findAll(
    @Args('args', { nullable: true }) args?: PaginationArgs,
  ): Promise<UsersReturnType> {
    return await this.userService.findAll(args);
  }

  @Query(() => User, { name: 'user' })
  async findOne(
    @Args('_id', { type: () => String }) _id: string,
  ): Promise<User> {
    return await this.userService.findOne(_id);
  }

  @Mutation(() => User)
  async updateUser(@Args('args') args: UpdateUserInput): Promise<User> {
    return await this.userService.update(args);
  }

  @Mutation(() => User)
  async removeUser(@Args('_id', { type: () => String }) _id: string) {
    return await this.userService.remove(_id);
  }
}
