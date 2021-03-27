// TODO: types

import AsyncStorage from '@react-native-async-storage/async-storage';

export const initialState = {
  token: '',
  user: {},
  property: {},
};

export default (state: any = initialState, action: any = {}) => {
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
