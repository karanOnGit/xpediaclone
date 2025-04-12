import React from 'react'

export const CompanyLink = ({ companiesWithLogos }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            // border: '1px solid black',
            padding: '10px 31px',
            margin: '30px 0',
        }}>
            {
                companiesWithLogos.map((company, index) => (
                    <div key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                            margin: '8px 0'
                        }}
                    >
                        <div>
                            <img
                                src={company.logo}
                                alt={company.name}
                                loading="lazy"
                                width='44px'
                                height='12px'
                            />
                        </div>
                        <div>
                            <p
                                style={{
                                    // border: '1px solid black',
                                    margin: 0,
                                    padding: '2px 0'
                                }}
                            >
                                {company.name}
                            </p>
                            <p
                                style={{
                                    color: '#ddd',
                                    fontSize: '15px',
                                    lineHeight: '100%',
                                    // border: '1px solid black',
                                    margin: 0,
                                    padding: '2px 0'
                                }}
                            >
                                #sharpElectronic/Socioglamm
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
