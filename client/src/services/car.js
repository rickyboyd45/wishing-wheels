import api from './apiConfig';

export const getAllCars = async () => {
  const resp = await api.get('/cars');
  return resp.data
}