import { Document } from 'mongoose';

export interface IUser extends Document  {
  email: string;
  fullName: string;
  avatarUrl?: string;
  passwordHash: string;
  description?: string
};
