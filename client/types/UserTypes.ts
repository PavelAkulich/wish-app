export interface IUser {
  username: string;
}

export interface IUserCred {
  email: string;
  password: string;
}

export interface IUserResponse {
  _id: string | null;
  fullName: string | null;
  email: string | null;
  avatarUrl: string | null;
  description: string | null;
  token: string | null;
}

export interface IUserRequest {
  fullName: string;
  email: string;
  avatarUrl?: string;
  description?: string;
  password: string
}
