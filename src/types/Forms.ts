export type GliderInputEvent = InputEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
};

//GENERIC TYPE
export type Form = { [key: string]: string };

export type AuthForm = {
  email: string;
  password: string;
} & Form; //This is extending the GENERIC TYPE

export type RegisterForm = {
  fullName: string;
  nickName: string;
  avatar: string;
  passwordConfirmation: string;
} & AuthForm; //This is extending the AuthForm

export type SubmitCallback = (f: any) => void;
