import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@InputType()
export class EducationInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => Date, { nullable: false })
  startedAt: Date;

  @Field(() => Date, { nullable: false })
  endAt: Date;
}

@ObjectType()
export class EducationType {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => Date, { nullable: false })
  startedAt: Date;

  @Field(() => Date, { nullable: false })
  endAt: Date;
}

@Schema()
export class Education extends Document {
  @Prop()
  title: string;

  @Prop()
  startedAt: Date;

  @Prop()
  endAt: Date;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
