import React, { useEffect } from 'react';
import { useSearchParams, Form, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/favoritesSlice';
import { fetchCities, setSortType, setFilterRegion } from '../redux/citiesSlice';

const Home = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const dispatch = useDispatch();

    const favorites = useSelector((state) => state.favorites.items);
    const { items: cities, status, error, sortType, filterRegion } = useSelector((state) => state.cities);

    useEffect(() => {
        dispatch(fetchCities(query));
    }, [query, dispatch]);

    useEffect(() => {
        const input = document.getElementById('q');
        if (input) input.value = query;
    }, [query]);

    const getProcessedCities = () => {
        let processed = [...cities];

        if (filterRegion) {
            processed = processed.filter(city =>
                city.countryName.toLowerCase().includes(filterRegion.toLowerCase())
            );
        }

        processed.sort((a, b) => {
            if (sortType === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortType === 'population') {
                return b.population - a.population;
            }
            return 0;
        });

        return processed;
    };

    const displayCities = getProcessedCities();

    const isFav = (id) => favorites.some(city => city.geonameId === id);
    const toggleFav = (city) => {
        if (isFav(city.geonameId)) dispatch(removeFromFavorites(city.geonameId));
        else dispatch(addToFavorites(city));
    };

    return (
        <div>
            <h2>База туристичних місць</h2>

            <Form style={{background: 'var(--card-bg)'}} method="get" action="/" className="search-form">
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

            <div style={{display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap', background: 'var(--card-bg)', padding: '15px', borderRadius: '8px'}}>
                <div>
                    <label style={{marginRight: '10px'}}>Фільтр (Країна):</label>
                    <input
                        type="text"
                        placeholder="Введіть країну..."
                        value={filterRegion}
                        onChange={(e) => dispatch(setFilterRegion(e.target.value))}
                        style={{padding: '5px', borderRadius: '4px', border: '1px solid #ccc'}}
                    />
                </div>
                <div>
                    <label style={{marginRight: '10px'}}>Сортування:</label>
                    <select
                        value={sortType}
                        onChange={(e) => dispatch(setSortType(e.target.value))}
                        style={{padding: '5px', borderRadius: '4px', border: '1px solid #ccc'}}
                    >
                        <option value="name">За назвою (А-Я)</option>
                        <option value="population">За населенням (більше-менше)</option>
                    </select>
                </div>
            </div>

            {favorites.length > 0 && !query && (
                <div style={{marginBottom: '40px'}}>
                    <h3>Улюблені</h3>
                    <div className="cards-grid">
                        {favorites.map((city) => (
                            <div key={city.geonameId} className="card" style={{border: '2px solid crimson'}}>
                                <div className="card-header">
                                    <h3>{city.name}</h3>
                                    <button className="fav-btn"
                                            onClick={() => dispatch(removeFromFavorites(city.geonameId))}>❤️</button>
                                </div>
                                <p>{city.countryName}</p>
                                <Link to={`/cities/${city.geonameId}`} className="card-link">Детальніше</Link>
                            </div>
                        ))}
                    </div>
                    <hr style={{margin: '30px 0', border: 0, borderTop: '1px solid #ccc'}}/>
                </div>
            )}

            <h3>Результати пошуку</h3>
            {status === 'failed' && <p>Помилка: {error}</p>}

            <div className="cards-grid">
                {displayCities.length > 0 ? (
                    displayCities.map((city) => (
                        <div key={city.geonameId} className="card">
                            <div className="card-header">
                                <h3>{city.name}</h3>
                                <button className="fav-btn" onClick={() => toggleFav(city)}>
                                    {isFav(city.geonameId) ? '❤️' : '🤍'}
                                </button>
                            </div>

                            <p>{city.countryName}</p>
                            <p style={{ color: '#666', fontSize: '0.9rem' }}>
                                {city.fcodeName} (Населення: {city.population})
                            </p>
                            <Link to={`/cities/${city.geonameId}`} className="card-link">Детальніше</Link>
                        </div>
                    ))) : (<p>Нічого не знайдено</p>)}
            </div>
        </div>
    );
};

export default Home;