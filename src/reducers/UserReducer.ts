import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser, IUserActions} from '../interfaces/User';

export const initialState: IUser = {
  token: '',
  user: {},
  property: {},
};

export const UserReducer = (state: IUser, action: IUserActions) => {
  switch (action.type) {
    case 'setToken':
      AsyncStorage.setItem('token', action.payload.token);
      return {...state, token: action.payload.token};

    case 'setUser':
      return {...state, user: action.payload.user};

    case 'setProperty':
      return {...state, property: action.payload.property};

    default:
      return state;
  }
};
