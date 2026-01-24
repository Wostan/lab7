import React from 'react';
import { Link } from 'react-router-dom';
import { Places } from '../data/places';

const Home = () => (
    <div>
        <h2>База туристичних місць</h2>
        <p className="subtitle">Оберіть місто:</p>

        <ul className="cities-list">
            {Places.map(place => (
                <li key={place.id}>
                    <Link to={`/cities/${place.id}`}>{place.name}</Link>
                </li>
            ))}
        </ul>

        <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop"
             alt="Travel Banner"
             className="banner-image" />
    </div>
);

export default Home;