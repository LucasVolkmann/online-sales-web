export const setItemStorage = (key: string, value: string) => localStorage.setItem(key, value);

export const unsetItemStorage = (key: string) => localStorage.removeItem(key);

export const getItemStorage = (key: string) => localStorage.getItem(key);
