import React from 'react';
import {createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Blog from '../pages/Blog';
import Catalog from '../pages/Catalog';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Product from '../pages/Product';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />}/>
      <Route path="catalog" element={<Catalog/>} />
      <Route path="catalog/product" element={<Product/>} />
      <Route path="contacts" element={<Contacts/>} />
      <Route path="blog" element={<Blog/>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />
};

export default AppRouter;