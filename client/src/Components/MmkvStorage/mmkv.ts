import { MMKV } from 'react-native-mmkv';
export const mmkv = new MMKV();


export const storage = new MMKV({
  id: 'user-Login-storage',
  encryptionKey: 'app'
});

export const setToken = (token: string) => {
  storage.set('token', token);
};

export const getToken = () : string | undefined => {
  return storage.getString('token');
};

export const removeToken = () => {
  storage.delete('token');
};


export const initialRoute = new MMKV();

export const getInitialRoute =  (key : string) => {
  return initialRoute.getString(key);
}

export const setInitialRoute = (key : string , value : string) => {
  initialRoute.set(key , value);
}

export const languageLocalStorage = new MMKV();

export const setLanguageLocalStorage = (language : string) : void => {
  languageLocalStorage.set("languageStorage" , language)
}
export const getLanguageLocalStorage = () : string | undefined => {
  return languageLocalStorage.getString("languageStorage")
}