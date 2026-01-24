import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    let errorMessage = "Помилка";

    if (isRouteErrorResponse(error)) {
        errorMessage = `${error.status}: ${error.data || error.statusText}`;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    return (
        <div className="error-page container">
            <h2>Сталася помилка</h2>
            <p className="subtitle"><i>{errorMessage}</i></p>
            <Link to="/" style={{ color: '#4285f4' }}>Повернутися на головну</Link>
        </div>
    );
};

export default ErrorPage;