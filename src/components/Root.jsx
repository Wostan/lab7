import React, {useEffect} from 'react';
import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import {openModal, toggleTheme} from "../redux/uiSlice.js";
import {useDispatch, useSelector} from "react-redux";
import Modal from "./Modal.jsx";

const Root = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    const theme = useSelector((state) => state.ui.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark-theme' : '';
    }, [theme]);

    return (
        <div>
            <Modal />

            <header className="app-header">
                <nav className="app-nav">
                    <NavLink to="/">Головна</NavLink>
                    <NavLink to="/about">Про нас</NavLink>
                </nav>

                <div style={{display: 'flex', gap: '10px'}}>
                    <button className="theme-btn" onClick={() => dispatch(openModal())}>Інфо</button>
                    <button className="theme-btn" onClick={() => dispatch(toggleTheme())}>
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </header>

            {isLoading && <div className="loading-overlay">Завантаження...</div>}

            <main className="container">
                <Outlet />
            </main>

            <footer className="app-footer">
                <p>Лабораторна робота №9</p>
            </footer>
        </div>
    );
};

export default Root;