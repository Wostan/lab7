import React from 'react';
import { NavLink, Outlet, useNavigation } from 'react-router-dom';

const Root = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <div>
            <header className="app-header">
                <nav className="app-nav">
                    <NavLink to="/">Головна</NavLink>
                    <NavLink to="/about">Про нас</NavLink>
                </nav>
            </header>

            {isLoading && <div className="loading-overlay">Завантаження...</div>}

            <main className="container">
                <Outlet />
            </main>

            <footer className="app-footer">
                <p>Лабораторна робота №8</p>
            </footer>
        </div>
    );
};

export default Root;