import IUser from './User';
import IProperty from './Property';

export interface IAuthState {
  token?: string;
  user?: IUser | null;
  property?: IProperty | null;
}

export interface IAuthActions {
  type: 'setToken' | 'setUser' | 'setProperty';
  payload: IAuthState;
}
