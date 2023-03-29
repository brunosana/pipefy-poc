
import axios from 'axios';

const baseURL: string = String(process.env.NEXT_PUBLIC_API_BASE_PATH);
const baseRequest = axios.create({
  baseURL,
});

export { baseRequest };
