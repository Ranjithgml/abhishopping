import { apiInstance, unwrapResponse } from ".";

export const login = async ({ userName, password }: any) => {
  return await apiInstance
    .post<any>("/auth/login", {
      username: userName,
      password: password,
    })
    .then(unwrapResponse)
    .catch((error) => error.response.data);
};
