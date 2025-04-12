import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

export const InfluenceList = ({ influcerList }) => {
    return (
        <>
            {
                influcerList.map((influence, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '25px',
                            marginBottom: '10px',
                            width: '100%',
                        }}
                    >
                        <img
                            src={influence.image}
                            alt={influence.name}
                            style={{ width: '33px', height: '33px', borderRadius: '50%' }}
                        />
                        <div>
                            <p>{influence.name}</p>
                            <p
                                style={{
                                    color: '#ddd',
                                    fontSize: '15px',
                                    lineHeight: '100%',
                                }}
                            >#sharpElectronic/Socioglamm</p>
                        </div>
                        {/* <p style={{ margin: 0 }}>{influence.name}</p> */}
                        <div>
                            <FaChevronRight />
                        </div>
                    </div>
                ))
            }
        </>
    );
};
