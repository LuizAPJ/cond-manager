export interface IUser {
  token: string;
  user: object;
  property: object;
}

export interface IUserActions {
  type: 'setToken' | 'setUser' | 'setProperty';
  payload: IUser;
}
