import { users } from "../schema/schema";
import { v4 as uuidv4 } from "uuid";

export type UserEntitySelect = typeof users.$inferSelect;
export type UserEntityInsert = typeof users.$inferInsert;

export type RepoCreateUserDto = Pick<
  Required<UserEntityInsert>,
  "uuid" | "email" | "hashKey" | "profileName" | "extra"
>;

export class UserDomain {
  static getUuid = () => uuidv4();

  private id: number | undefined;
  private uuid: string;
  private roleId: number;
  private email: string;
  private hashKey: string;
  private isEmailVerified: boolean;
  private profileName: string;
  private profileImage: string | null;
  private extra: any;
  private createdAt: Date | undefined;
  private updatedAt: Date | undefined;

  private ROLE = {
    admin: 0,
    user: 1,
  };

  constructor({
    id,
    uuid,
    roleId,
    email,
    hashKey,
    isEmailVerified,
    profileName,
    profileImage,
    extra,
    createdAt,
    updatedAt,
  }: Omit<UserEntityInsert, "uuid" | "extra"> &
    Partial<Pick<UserEntityInsert, "uuid" | "extra">>) {
    this.id = id;
    this.uuid = uuid ? uuid : uuidv4();
    this.roleId = roleId ? roleId : this.ROLE["user"];
    this.email = email;
    this.hashKey = hashKey;
    this.isEmailVerified =
      isEmailVerified === undefined ? false : isEmailVerified;
    this.profileName = profileName;
    this.profileImage = profileImage ? profileImage : null;
    this.extra = extra ? extra : {};
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  getCreateUserDto = (): RepoCreateUserDto => {
    return {
      uuid: this.uuid,
      email: this.email,
      hashKey: this.hashKey,
      extra: this.extra,
      profileName: this.profileName,
    };
  };
}
