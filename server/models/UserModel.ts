import { model, Schema } from 'mongoose';
import { IUser } from './../types/UserTypes';

const UserSchema: Schema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

export default model('User', UserSchema);
