import React from 'react';
import { FaPlus } from 'react-icons/fa'; // Font Awesome Plus Icon

const FloatingAddButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            style={styles.button}
            className="floating-btn"
        >
            <FaPlus size={20} />
        </button>
    );
};

const styles = {
    button: {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#0a8435',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease',
        zIndex: 1000,
    },
};

export default FloatingAddButton;
