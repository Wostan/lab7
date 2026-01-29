import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';

import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import About from './pages/About';
import Home from './pages/Home';
import CityPage from './pages/CityPage';
import {citiesLoader, cityDetailsLoader} from "./loaders.js";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>

            <Route index
                   element={<Home />}
                   loader={citiesLoader} />

            <Route path="cities/:cityId"
                   element={<CityPage />}
                   loader={cityDetailsLoader}
                   errorElement={<ErrorPage />} />

            <Route path="about" element={<About />} />
            <Route path="*" element={<div style={{padding:20}}><h2>404: Сторінка не знайдена</h2></div>} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);