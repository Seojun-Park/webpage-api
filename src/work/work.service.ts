import { Injectable } from '@nestjs/common';
import { CreateWorkInput } from './dto/create-work.input';
import { UpdateWorkInput } from './dto/update-work.input';
import { InjectModel } from '@nestjs/mongoose';
import { Work } from './entities/work.entity';
import { Model, SortOrder } from 'mongoose';
import { PaginationArgs } from '../common/dto/paginate.input';
import { WorksReturnType } from '../common/dto/returnType.dto';

@Injectable()
export class WorkService {
  constructor(
    @InjectModel(Work.name) private readonly workModel: Model<Work>,
  ) {}

  async create(args: CreateWorkInput) {
    try {
      const work = new this.workModel(args);
      return work.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(
    args: PaginationArgs = { skip: 0, take: 25 },
  ): Promise<WorksReturnType> {
    try {
      const { skip, sort, take } = args;
      const sortOptions = {
        [sort?.field]: sort?.order?.toLowerCase() as SortOrder,
      };
      const users = await this.workModel
        .find(null, null, {
          limit: take,
          skip,
        })
        .sort(sortOptions);
      const total = await this.workModel.count();

      return {
        data: users,
        total,
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(_id: string): Promise<Work> {
    try {
      return await this.workModel.findById({ _id });
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(args: UpdateWorkInput) {
    try {
      const { _id, ...rest } = args;
      return await this.workModel.findOneAndUpdate(
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
      return await this.workModel.findByIdAndRemove({ _id });
    } catch (err) {
      throw new Error(err);
    }
  }
}
