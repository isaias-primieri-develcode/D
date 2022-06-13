/* eslint-disable prettier/prettier */
import React from 'react';
import {useAuth} from '../contexts/auth';
import {Routes} from './index.routes';
import {LoginRoutes} from './login.routes';

const AllRoutes: React.FC = () => {
  const {signed} = useAuth();

  return signed ? <Routes /> : <LoginRoutes />;

};
export default AllRoutes;
