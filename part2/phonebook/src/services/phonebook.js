import axios from 'axios';
const baseUrl = 'http://localhost:3003/persons';

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(response => response.data);
}

const create = (newPerson) => {
  return axios
    .post(baseUrl, newPerson)
    .then(response => response.data);
}

const update = (id, newPerson) => {
  return axios
    .put(`${baseUrl}/${id}`, newPerson)
}

export default { getAll, create, update };