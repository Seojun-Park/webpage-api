import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@InputType()
export class EducationInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  level: string;
}

@ObjectType()
export class EducationType {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  level: string;
}

@Schema()
export class Education extends Document {
  @Prop()
  title: string;

  @Prop()
  level: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
