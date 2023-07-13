import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { StackSchema, StackType } from '../../common/dto/stack.dto';

@Schema()
@ObjectType()
export class Experience {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { nullable: false })
  title: string;

  @Prop()
  @Field(() => String, { nullable: false })
  description: string;

  @Prop()
  @Field(() => String, { nullable: true })
  link?: string | null;

  @Prop({ type: [StackSchema] })
  @Field(() => [StackType], { nullable: true })
  stacks?: Record<string, string>[] | null;

  @Prop()
  @Field(() => Date, { nullable: false })
  startedAt: Date;

  @Prop()
  @Field(() => Date, { nullable: true })
  endAt?: Date | null;

  @Prop({ default: Date.now })
  @Field(() => Date)
  createdAt!: Date;

  @Prop({ default: Date.now })
  @Field(() => Date)
  updatedAt!: Date;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
