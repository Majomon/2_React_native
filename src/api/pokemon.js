import { URL_API_HOST } from "../utils/constants";

export async function getPokemon() {
  try {
    const response = await fetch(URL_API_HOST);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
