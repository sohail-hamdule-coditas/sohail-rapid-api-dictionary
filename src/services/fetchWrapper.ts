import { API_KEY, BACKEND_URL, HOST } from "@/constants/constants";

const fetchWrapper = (url: RequestInfo | URL, options?: RequestInit) => {
  return fetch(`${BACKEND_URL ?? ''}${url}`, {
    ...options,
    headers: {
      ...options?.headers,
      'X-RapidAPI-Key': API_KEY ?? '',
      'X-RapidAPI-Host': HOST ?? ''
    }
  });
}

export default fetchWrapper;