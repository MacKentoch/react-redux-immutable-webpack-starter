import axios          from 'axios';
import {
  defaultOptions,
  getLocationOrigin
}                     from './fetchTools';

export const getSomething = () => {
  const url = `${getLocationOrigin()}/api/getSomething`;
  const options = {...defaultOptions};

  return axios
        .get(url, options)
        .then(data => data)
        .catch(error => error);
};
