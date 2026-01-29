import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../redux/uiSlice';

const Modal = () => {
    const isOpen = useSelector((state) => state.ui.isModalOpen);
    const dispatch = useDispatch();

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
            justifyContent: 'center', alignItems: 'center', zIndex: 2000
        }}>
            <div style={{
                background: 'var(--card-bg)', padding: '20px',
                borderRadius: '8px', maxWidth: '400px', color: 'var(--text)'
            }}>
                <h3>Довідка</h3>
                <p>Лабораторна робота №9</p>
                <p>Виконана Безрукавим Костянтином із групи ПІ-422</p>
                <button onClick={() => dispatch(closeModal())}
                        style={{padding: '5px 10px', cursor: 'pointer', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px'}}>
                    Закрити
                </button>
            </div>
        </div>
    );
};

export default Modal;