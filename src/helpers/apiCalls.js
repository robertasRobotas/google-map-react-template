import axios from 'axios';
import secrets from '../secret';

const getGeocode = (location) =>
  axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${secrets.googleApiKey}`
  );
export { getGeocode };
