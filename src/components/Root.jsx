import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <header className="app-header">
                <nav className="app-nav">
                    <NavLink to="/"
                             className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Головна
                    </NavLink>
                    <NavLink to="/about"
                             className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Про проєкт
                    </NavLink>
                    <NavLink to="/admin"
                             className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Адмін
                    </NavLink>
                </nav>
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer className="app-footer">
                <p>Лабораторна робота №7</p>
            </footer>
        </div>
    );
};

export default Root;