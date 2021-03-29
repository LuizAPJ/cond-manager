import React, {createContext, useReducer} from 'react';

import {initialState, AuthReducer} from '../reducers/AuthReducer';
import {IAuthState, IAuthActions} from '../interfaces/Auth';

interface AuthContextData {
  state: IAuthState;
  dispatch: React.Dispatch<IAuthActions>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
