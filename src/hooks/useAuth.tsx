import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {clearUser} from '../store/tokenUserSlice';

interface AuthContextProps {
  isLoggedIn: boolean;
  loading: boolean;
  checkAuthStatus: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.user.token);

  const checkAuthStatus = async () => {
    if (token) {
      setLoading(false);
    } else {
      dispatch(clearUser());
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <AuthContext.Provider
      value={{isLoggedIn: !!token, loading, checkAuthStatus}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
