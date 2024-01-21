import client from '../../src/config/axios-interceptor';
import services from './services';

const fetchMovies = async () => {
  const res = await client.get(`${services.base_url}/${services.common.list}`);
  return res?.data;
};

const fetchCategories = async () => {
  const res = await client.get(`${services.base_url}/${services.common.genre}`);
  return res?.data;
};

const fetchDetails = async (id) => {
  const res = await client.get(`${services.base_url}/${services.common.details}/${id}`);
  return res?.data;
};

const fetchTrailer = async (id) => {
  const res = await client.get(`${services.base_url}/movie/${id}/videos`);
  return res?.data;
};

const fetchByGenre = async id => {
  const res = await client.get(
    `${services.base_url}/${services.common.discover}?with_genres=${id}`,
  );
  return res?.data;
};

const API = {
  fetchMovies,
  fetchCategories,
  fetchByGenre,
  fetchDetails,
  fetchTrailer,
};

export default API;
