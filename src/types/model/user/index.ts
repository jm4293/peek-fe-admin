import { UserStatusEnum, UserTypeEnum } from '@/constant/enum';

export interface IUser {
  userSeq: number;
  name: string;
  nickname: string;
  status: UserStatusEnum;
  thumbnail: string;
  type: UserTypeEnum;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  isDeleted: boolean;
}
