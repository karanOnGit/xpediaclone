import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

export const NavLeft = () => {
    const [selected, setSelected] = useState("left");
    const buttonStyle = (isSelected) => ({
        width: '160px',
        height: '37px',
        borderRadius: "20px",
        fontWeight: "600",
        backgroundColor: isSelected ? "#44955C" : "#e5e7eb",
        color: isSelected ? "#fff" : "#1E1E19C7",
        border: "none",
        cursor: "pointer",
        FontStyle: 'Montserrat',
        padding: '4px 0 4px 0',
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
            <img src="https://s3-alpha-sig.figma.com/img/3b58/2500/88c1d51b7a0dad788e8d233c9c014061?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VYU3NV96DYc0EQQSq2uYUIe7PyPLvD9wQhmxCEvxu2qdWg8eScWSMHoAfEhXC0n8dFcyo40lqfn~msWDeh~t8RZVl23LDehtOOPi~C4ynhBc0xGs7zyz1in8B0awpPJ1aH30h6KZbMWj2Bq-9Gqs8vc3nkuHkzpxtbb9y~Z5mMl3fTUVF5RqBbmQsZocpFXjMYTsiOv6btqW3uv3w0YHlifJUrrLFYEKkklf6phPR~tGSVHQbg0-d1pEE7DfLIoDT0IauSAkMGSxCG5l-m-aNMJLPk66IITNdmynKYbrqQmJHZI16wqQZgn-y2mw~tmnLhJMw1O3K5v84auoONb82w__" alt="logo" width="186px" height="41px" style={{
                cursor: 'pointer'
            }} />
            <div
                style={{
                    backgroundColor: '#e5e7eb',
                    width: '451px',
                    height: '48px',
                    borderRadius: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}
            >
                <button
                    onClick={() => setSelected("left")}
                    style={buttonStyle(selected === "left")}
                >
                    Community
                </button>

                <button
                    onClick={() => setSelected("right")}
                    style={buttonStyle(selected === "right")}
                >
                    Ecommerce
                </button>
                <div
                    style={{
                        width: '20.47px',
                        height: '20.57',
                    }}
                >
                    <FaSearch />
                </div>
            </div>
        </div>
    )
}

