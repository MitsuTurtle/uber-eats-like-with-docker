import axios from 'axios';
import { foodsIndex } from '../urls/index';

export const fetchFoods = (RestaurantID) => {
  return axios
    .get(foodsIndex(RestaurantID))
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
};
