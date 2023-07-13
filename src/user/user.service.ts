import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model, SortOrder } from 'mongoose';
import { PaginationArgs } from '../common/dto/paginate.input';
import { UsersReturnType } from '../common/dto/returnType.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(args: CreateUserInput) {
    try {
      const user = new this.userModel(args);
      return user.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(
    args: PaginationArgs = { skip: 0, take: 25 },
  ): Promise<UsersReturnType> {
    try {
      const { skip, sort, take } = args;
      const sortOptions = {
        [sort?.field]: sort?.order?.toLowerCase() as SortOrder,
      };
      const users = await this.userModel
        .find(null, null, {
          limit: take,
          skip,
        })
        .sort(sortOptions);
      const total = await this.userModel.count();

      return {
        data: users,
        total,
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(_id: string): Promise<User> {
    try {
      return await this.userModel.findById({ _id });
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(args: UpdateUserInput) {
    try {
      const { _id, ...rest } = args;
      return await this.userModel.findOneAndUpdate(
        { _id },
        {
          $set: { ...rest },
        },
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(_id: string) {
    try {
      return await this.userModel.findByIdAndRemove({ _id });
    } catch (err) {
      throw new Error(err);
    }
  }
}
