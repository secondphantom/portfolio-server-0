export type JwtConfig = {
  AUTH_SIGN_IN_JWT_SECRET: string;
  AUTH_SIGN_IN_EXP_DURATION_SEC: number;
  AUTH_EMAIL_VERIFY_JWT_SECRET: string;
  AUTH_EMAIL_VERIFY_EXP_DURATION_SEC: number;
};

export type JwtAuthSignPayload = {
  userId: number;
  uuid: string;
  role: number;
};

export type JwtEmailVerifyPayload = {
  email: number;
  uuid: string;
};

export interface IJwtUtil {
  signAuth: (payload: JwtAuthSignPayload) => Promise<string>;
  signEmailVerify: (payload: JwtEmailVerifyPayload) => Promise<string>;

  verifyAuth: (token: string) => Promise<boolean>;
  verifyEmailVerify: (token: string) => Promise<boolean>;

  decode: <T = { [key in string]: any }>(token: string) => { payload: T };
}
