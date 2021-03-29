import AsyncStorage from '@react-native-async-storage/async-storage';

import {IAuthState, IAuthActions} from '../interfaces/Auth';

export const initialState: IAuthState = {
  token: '',
  user: {},
  property: {},
};

export const AuthReducer = (
  state: IAuthState = initialState,
  action: IAuthActions,
) => {
  switch (action.type) {
    case 'setToken':
      if (action.payload.token) {
        AsyncStorage.setItem('token', action.payload.token);
      }
      return {...state, token: action.payload.token};

    case 'setUser':
      return {...state, user: action.payload.user};

    case 'setProperty':
      return {...state, property: action.payload.property};

    default:
      return state;
  }
};
