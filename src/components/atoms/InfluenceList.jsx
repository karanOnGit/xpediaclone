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
                            height: '49px',
                            // backgroundColor: 'red',
                        }}
                    >
                        <img
                            src={influence.image}
                            alt={influence.name}
                            style={{ width: '33px', height: '33px', borderRadius: '50%' }}
                        />
                        <div>
                            <p
                                style={{
                                    // border: '1px solid black',
                                    margin: 0,
                                    padding: '2px 0'
                                }}
                            >
                                {influence.name}
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

                        <div>
                            <FaChevronRight />
                        </div>
                    </div>
                ))
            }
        </>
    );
};
