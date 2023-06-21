import axios from 'axios';
const env = import.meta.env;

console.log('env', env);

axios.interceptors.request.use((r) => {
  r.headers.Authorization = localStorage.getItem('token');
  return r;
});

export const loginByUserNameAndPassword = async (username: string, password: string) => {
  const user = await axios.post(`${env.VITE_API_BACKEND_URL}/login`, { username, password });

  return user.data;
};

export const getUserCredits = async () => {
  const credits = await axios.get(`${env.VITE_API_BACKEND_URL}/userCredits`);

  return credits.data;
};

export const getBasicCompany = async () => {
  const company = await axios.get(`${env.VITE_API_BACKEND_URL}/basicCompany`);

  return company.data;
};

export const getFullCompanyByName = async (companyName: string) => {
  const company = await axios.get(`${env.VITE_API_BACKEND_URL}/fullCompany/${companyName}`);

  return company.data;
};
