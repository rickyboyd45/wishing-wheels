import api from './apiConfig';

export const getAllCars = async () => {
  const resp = await api.get('/cars');
  return resp.data
}

export const postCar = async (carData) => {
  const resp = await api.post('/cars', { car: carData });
  return resp.data;
};

export const deleteCar = async (id) => {
  await api.delete(`/cars/${id}`);
}