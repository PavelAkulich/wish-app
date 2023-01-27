export function getErrorMessage(error: any): string {
  if (typeof error === "string") return error;
  if (error?.error && error?.error?.status && error?.error?.status === 401)
    return "Ошибка авторизации";
  return "Ошибка";
}

export const objectToString = (object: any) => {
  return JSON.stringify(object);
};

export const objectFromString = (string: string) => {
  return JSON.parse(string);
};

export const getItem = (name: string) => {
  return localStorage.getItem(name);
};

export const setItem = (name: string, value: any) => {
  return localStorage.setItem(name, value);
};
