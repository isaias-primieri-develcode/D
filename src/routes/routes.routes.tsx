/* eslint-disable prettier/prettier */
import React from 'react';
import {useAuth} from '../contexts/auth';
import {LoginRoutes} from './login.routes';
import { RestaurantRoutes } from './restaurant.routes';

const AllRoutes: React.FC = () => {
  const {signed} = useAuth();

  return signed ? <RestaurantRoutes /> : <LoginRoutes />;

};
export default AllRoutes;
