import { Injectable } from '@nestjs/common';
import { CreateExperienceInput } from './dto/create-experience.input';
import { UpdateExperienceInput } from './dto/update-experience.input';
import { InjectModel } from '@nestjs/mongoose';
import { Experience } from './entities/experience.entity';
import { Model, SortOrder } from 'mongoose';
import { PaginationArgs } from '../common/dto/paginate.input';
import { ExperiencesReturnType } from '../common/dto/returnType.dto';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel(Experience.name)
    private readonly experienceModel: Model<Experience>,
  ) {}

  async create(args: CreateExperienceInput) {
    try {
      const experience = new this.experienceModel(args);
      return experience.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(
    args: PaginationArgs = { skip: 0, take: 25 },
  ): Promise<ExperiencesReturnType> {
    try {
      const { skip, sort, take } = args;
      const sortOptions = {
        [sort?.field]: sort?.order?.toLowerCase() as SortOrder,
      };
      const experiences = await this.experienceModel
        .find(null, null, {
          limit: take,
          skip,
        })
        .sort(sortOptions);
      const total = await this.experienceModel.count();

      return {
        data: experiences,
        total,
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(_id: string): Promise<Experience> {
    try {
      return await this.experienceModel.findById({ _id });
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(args: UpdateExperienceInput) {
    try {
      const { _id, ...rest } = args;
      return await this.experienceModel.findOneAndUpdate(
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
      return await this.experienceModel.findByIdAndRemove({ _id });
    } catch (err) {
      throw new Error(err);
    }
  }
}
