import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
