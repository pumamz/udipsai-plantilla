import axios from "axios";

const token = process.env.VITE_API_KEY;
const baseURL = process.env.VITE_API_URL;

const client = axios.create({
  baseURL,
  headers: {
    "access-token-udipsai": token,
  },
  timeout: 30000,
});

// Interceptor para manejo de errores
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Manejar token expirado
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default client;
export { token, baseURL };
