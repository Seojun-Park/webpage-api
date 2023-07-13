import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  AttachmentSchema,
  AttachmentType,
} from '../../common/dto/attachment.dto';
import { StackSchema, StackType } from '../../common/dto/stack.dto';

@Schema()
@ObjectType()
export class Work {
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
  repositoryLink?: string | null;

  @Prop({ type: [AttachmentSchema] })
  @Field(() => [AttachmentType], { nullable: true })
  images?: Record<string, string>[] | null;

  @Prop({ type: [AttachmentSchema] })
  @Field(() => [AttachmentType], { nullable: true })
  attachments?: Record<string, string>[] | null;

  @Prop({ type: [StackSchema] })
  @Field(() => [StackType], { nullable: true })
  stacks?: Record<string, string>[] | null;

  @Prop({ default: Date.now })
  @Field(() => Date)
  createdAt!: Date;

  @Prop({ default: Date.now })
  @Field(() => Date)
  updatedAt!: Date;
}

export const WorkSchema = SchemaFactory.createForClass(Work);
