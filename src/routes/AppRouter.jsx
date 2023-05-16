import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Catalog from '../pages/Catalog';
import Contacts from '../pages/Contacts';
import Delivery from '../pages/Delivery';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Product from '../pages/Product';
import Article from '../pages/Article';
import Favorites from "../pages/Favorites";
import Cart from "../pages/Cart";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="catalog" element={<Catalog/>}/>
            <Route path="catalog/product/:id" element={<Product/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="favorites" element={<Favorites/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="delivery" element={<Delivery/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="blog/article/:id" element={<Article/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Route>
    )
);

const AppRouter = () => {
    return <RouterProvider router={router}/>
};

export default AppRouter;