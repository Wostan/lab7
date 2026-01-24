import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const CityPage = () => {
    const data = useLoaderData();

    return (
        <div>
            <h2>{data.name}</h2>
            <p className="subtitle">Країна: <strong>{data.country}</strong></p>
            <p>{data.description}</p>

            <div style={{ marginTop: '30px' }}>
                <Link to="/" style={{ color: '#4285f4', textDecoration: 'none', fontWeight: 'bold' }}>
                    Повернутися
                </Link>
            </div>
        </div>
    );
};

export default CityPage;