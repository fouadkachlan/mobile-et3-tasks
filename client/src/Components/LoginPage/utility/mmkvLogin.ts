import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'user-Login-storage',
  encryptionKey: 'app'
});

export const setToken = (token: string) => {
  storage.set('token', token);
};

export const getToken = () => {
  return storage.getString('token');
};

export const removeToken = () => {
  storage.delete('token');
};
