import React from 'react'

export const CompanyLogos = ({compLogo}) => {
    return (
        <div
            style={{
                display: 'flex',
                // gap: '16px',
                // padding: '14px 11px 14px 11px',
                backgroundColor: '#f7f7f7',
                borderRadius: '100px',
                justifyContent: 'center',
            }}
        >
            {compLogo.map((logoLink, index) => (
                <div
                    key={index}
                    style={{
                        width: '94px',
                        height: '94px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '12px',
                        backgroundColor: 'transparent',
                    }}
                >
                    <div
                        style={{
                            width: '75.97px',
                            height: '75.97px',
                            borderRadius: '50%',
                            backgroundColor: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                        }}
                    >
                        <img
                            src={logoLink}
                            alt={`Company Logo ${index}`}
                            style={{
                                maxWidth: '80%',
                                maxHeight: '80%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
