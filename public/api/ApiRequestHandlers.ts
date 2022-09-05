import { HttpMetod } from "../../src/utils/constants/HttpMethods";

const createHeaders = <TBody>(
  method: HttpMetod,
  body: TBody | null = null,
  headers: Record<string, string> | null = null
) => {
  return {
    method,
    headers: {
      ...(headers && { ...headers }),
      "Content-Type": "application/json",
    },
    body: body && JSON.stringify(body),
  };
};

export const apiRequestHandler = async <TBody, TResult>(
  method: HttpMetod = HttpMetod.GET,
  reqBody?: TBody
): Promise<TResult> => {
  const response = await fetch(
    `/api/cars.json`,
    createHeaders(method, reqBody)
  );
  return response.json();
};

export const apiRequestWithIdHandler = async <TBody, TResult>(
  id: string,
  method: HttpMetod = HttpMetod.GET,
  reqBody?: TBody
): Promise<TResult> => {
  const response = await fetch(
    `/api/cars.json/${id}`,
    createHeaders(method, reqBody)
  );
  return response.json();
};
