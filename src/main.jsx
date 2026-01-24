import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './index.css';

import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';
import About from './pages/About';
import AdminArea from './pages/AdminArea';
import CityPage from './pages/CityPage';
import { Places } from './data/places';

const placeLoader = async ({ params }) => {
    await new Promise(r => setTimeout(r, 500));

    const place = Places.find(p => p.id === params.cityId);

    if (!place) {
        throw new Response("Not Found", { status: 404, statusText: "Місто не знайдено" });
    }
    return place;
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="admin" element={<AdminArea />} />

            <Route
                path="cities/:cityId"
                element={<CityPage />}
                loader={placeLoader}
                errorElement={<ErrorPage />}
            />

            <Route path="*" element={<div style={{padding: 20}}><h2>404: Сторінка не знайдена</h2></div>} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);