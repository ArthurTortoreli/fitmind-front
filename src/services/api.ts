import axios from 'axios';
import { FormData } from '../context/FormContext';

const API_BASE = 'https://api.fitmind.com';

export const registerProfessional = async (data: FormData) => {
  const response = await axios.post(`${API_BASE}/professionals/register`, data);
  return response.data;
};

export const registerStudent = async (data: FormData) => {
  const response = await axios.post(`${API_BASE}/students/register`, data);
  return response.data;
};