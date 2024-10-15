import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  token: string | null;
  fullName: string | null;
}

const initialState: UserState = {
  token: null,
  fullName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    clearUser: state => {
      state.token = null;
      state.fullName = null;
    },
  },
});

export const {setToken, setFullName, clearUser} = userSlice.actions;

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
};

const persistedUserReducer = persistReducer(
  userPersistConfig,
  userSlice.reducer,
);

export default persistedUserReducer;
