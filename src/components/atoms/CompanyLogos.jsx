import React, { useState } from 'react';

export const CompanyLogos = ({ compLogo }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            style={{
                display: 'flex',
                borderRadius: '100px',
                justifyContent: 'center',
                backgroundColor: '#f7f7f7',
                position: 'fixed',
                top: '144px', // Replaces marginTop
                // right: '53px',
                zIndex: 10,
                width: '998px',
                // padding: '10px 0', // Optional for spacing inside the container
            }}
        >
            {compLogo.map((logoLink, index) => (
                <div
                    key={index}
                    style={{
                        width: '76px',
                        height: '76px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                        margin: '9px 12px',
                        border: hoveredIndex === index ? '1px solid #000' : 'none',
                        transition: 'border 0.2s ease-in-out',
                    }}
                >
                    <a href={logoLink} target='_blank'>
                        <img
                            src={logoLink}
                            alt={`Company Logo ${index}`}
                            style={{
                                maxWidth: '80%',
                                maxHeight: '80%',
                                objectFit: 'contain',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        />
                    </a>
                </div>
            ))}
        </div>
    );
};
