import axios, { AxiosResponse } from "axios";

interface Error {
  code: number;
  message: string;
}

export interface Response<T> {
  responseData: T;
  success: boolean;
  error: Error;
}

export const apiInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const unwrapResponse = <T = any>(
  response: AxiosResponse<Response<T>, any>
) => {
  const { data } = response;
  if (data.error?.code || !data.success) throw { response };
  return data;
};
