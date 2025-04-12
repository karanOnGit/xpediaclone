import React from 'react'

export const CompanyLink = ({ companiesWithLogos }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            // border: '1px solid black',
            padding: '10px 31px',
        }}>
            {
                companiesWithLogos.map((company, index) => (
                    <div key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                        }}
                    >
                        <div>
                            <img
                                src={company.logo}
                                alt={company.name}
                                loading="lazy"
                                width='44px'
                                height='10px'
                            />
                        </div>
                        <div>
                            <p>{company.name}</p>
                            <p
                                style={{
                                    color: '#ddd',
                                    fontSize: '15px',
                                    lineHeight: '100%',
                                }}
                            >#sharpElectronic/Socioglamm</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
