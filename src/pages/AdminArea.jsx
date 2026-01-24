import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminArea = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm("Ви точно хочете вийти?");
        if (confirmLogout) {
            navigate('/');
        }
    };

    return (
        <div>
            <h2>Admin Area</h2>
            <button onClick={handleLogout} style={{ padding: '5px 10px', cursor: 'pointer' }}>
                Вийти
            </button>
        </div>
    );
};

export default AdminArea;