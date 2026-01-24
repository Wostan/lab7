import React, { useEffect } from 'react';
import { useLoaderData, Form, Link } from 'react-router-dom';

const Home = () => {
    const { cities, query } = useLoaderData();

    useEffect(() => {
        document.getElementById('q').value = query || '';
    }, [query]);

    return (
        <div>
            <h2>База туристичних місць</h2>

            <Form method="get" action="/" className="search-form">
                <input
                    id="q"
                    name="query"
                    type="text"
                    placeholder="Введіть назву міста"
                    className="search-input"
                    defaultValue={query}
                />
                <button type="submit" className="search-btn">Пошук</button>
            </Form>

            <div className="cards-grid">
                {cities.length > 0 ? (
                    cities.map((city) => (
                        <div key={city.geonameId} className="card">
                            <h3>{city.name}</h3>
                            <p>{city.countryName}</p>
                            <p style={{ color: '#666', fontSize: '0.9rem' }}>
                                {city.fcodeName} (Населення: {city.population})
                            </p>
                            <Link to={`/cities/${city.geonameId}`} className="card-link">
                                Детальніше
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>Нічого не знайдено</p>
                )}
            </div>
        </div>
    );
};

export default Home;