export interface IUserModel {
  id: number,
  fakeToken: string,
  name: {
    first: string,
    last: string
  },
  login: string,
  password: string,
}

export interface IUserModelToken {
  token: string;
}
