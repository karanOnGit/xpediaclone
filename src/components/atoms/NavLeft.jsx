import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaUsers, FaShoppingCart } from "react-icons/fa";

export const NavLeft = () => {
    const location = useLocation();
    const selected = location.pathname === "/" ? "left" : "right";

    const linkStyle = (isSelected) => ({
        width: '160px',
        height: '37px',
        borderRadius: "20px",
        fontWeight: "600",
        backgroundColor: isSelected ? "#44955C" : "#F5F5F5",
        color: isSelected ? "#fff" : "#000",
        textDecoration: 'none',
        fontFamily: 'Montserrat',
        padding: '4px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    });

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '668px',
                height: '48px',
                gap: '31px',
            }}
        >
            <img
                src="https://s3-alpha-sig.figma.com/img/3b58/2500/88c1d51b7a0dad788e8d233c9c014061?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VYU3NV96DYc0EQQSq2uYUIe7PyPLvD9wQhmxCEvxu2qdWg8eScWSMHoAfEhXC0n8dFcyo40lqfn~msWDeh~t8RZVl23LDehtOOPi~C4ynhBc0xGs7zyz1in8B0awpPJ1aH30h6KZbMWj2Bq-9Gqs8vc3nkuHkzpxtbb9y~Z5mMl3fTUVF5RqBbmQsZocpFXjMYTsiOv6btqW3uv3w0YHlifJUrrLFYEKkklf6phPR~tGSVHQbg0-d1pEE7DfLIoDT0IauSAkMGSxCG5l-m-aNMJLPk66IITNdmynKYbrqQmJHZI16wqQZgn-y2mw~tmnLhJMw1O3K5v84auoONb82w__"
                alt="logo"
                width="186px"
                height="41px"
                style={{ cursor: 'pointer' }}
            />

            <div
                style={{
                    backgroundColor: '#F5F5F5',
                    width: '451px',
                    height: '48px',
                    borderRadius: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    padding: '4px 0',
                }}
            >
                <Link to='/' style={linkStyle(selected === "left")}>
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center'
                        }}
                    >
                        <FaUsers />
                        <p>
                            Community
                        </p>
                    </div>
                </Link>
                <svg width="2" height="26" viewBox="0 0 2 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.25" x1="1.17398" y1="0.657143" x2="1.17398" y2="25.3429" stroke="#1E1E19" stroke-opacity="0.78" />
                </svg>

                <Link to='/Ecommerce' style={linkStyle(selected === "right")}>
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center'
                        }}
                    >
                        <FaShoppingCart />
                        <p>
                            Ecommerce
                        </p>
                    </div>
                </Link>
                <svg width="2" height="26" viewBox="0 0 2 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.25" x1="1.17398" y1="0.657143" x2="1.17398" y2="25.3429" stroke="#1E1E19" stroke-opacity="0.78" />
                </svg>

                <div style={{ width: '20.47px', height: '20.57px' }}>
                    <FaSearch />
                </div>
            </div>
        </div>
    );
};
