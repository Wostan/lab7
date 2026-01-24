import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const CityPage = () => {
    const data = useLoaderData();

    return (
        <div className="details-page">
            <Link to="/" style={{ textDecoration: 'none', color: '#666' }}>Назад</Link>

            <h1 style={{ color: '#1976d2', marginTop: '10px' }}>{data.name}</h1>
            <h3>{data.countryName}</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                <div>
                    <p><strong>Населення:</strong> {data.population}</p>
                    <p><strong>Часовий пояс:</strong> {data.timezone?.timeZoneId}</p>
                    <p><strong>Координати:</strong> {data.lat}, {data.lng}</p>
                </div>
                <div>
                    <p><strong>Тип місцевості:</strong> {data.fcodeName}</p>
                </div>
            </div>
        </div>
    );
};

export default CityPage;