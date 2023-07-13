import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@InputType()
export class StackInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: true })
  logo?: string | null;
}

@ObjectType()
export class StackType {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: true })
  logo?: string | null;
}

@Schema()
export class Stack extends Document {
  @Prop()
  title: string;

  @Prop()
  url?: string | null;
}

export const StackSchema = SchemaFactory.createForClass(Stack);
