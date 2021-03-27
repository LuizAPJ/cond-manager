// TODO: types

import React, {createContext, useContext, useReducer} from 'react';

import UserReducer from '../reducers/UserReducer';

interface StateContextData {
  state: any;
  dispatch: React.Dispatch<any>;
}

const initialState = {
  user: UserReducer(),
};

const MainReducer = (state: any, action: any) => ({
  user: UserReducer(state.user, action),
});

export const StateContext = createContext<StateContextData>(
  {} as StateContextData,
);

export const StateProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(MainReducer, initialState);

  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
