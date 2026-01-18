const BASE_URL = 'https://kinopoiskapiunofficial.tech/api/';
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

export const apiFetch = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(BASE_URL + endpoint, {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    console.error(
      `API Error: ${response.status} ${response.statusText} at ${endpoint}`,
    );
    throw new Error(`Network error: ${response.status}`);
  }

  return response.json();
};
