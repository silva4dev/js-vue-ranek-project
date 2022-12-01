import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:3000"
});

export const api = {
  get(endpoint) {
    return axiosConfig.get(endpoint);
  },
  post(endpoint, body) {
    return axiosConfig.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosConfig.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosConfig.delete(endpoint);
  }
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}


