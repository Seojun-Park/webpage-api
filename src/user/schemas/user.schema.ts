import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  bio: String,
  language: [String],
  stacks: [String],
  firstName: String,
  lastName: String,
  email: String,
});
