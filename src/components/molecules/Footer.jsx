import React from "react";
import rectImg from '../../assets/rectangle.png';

const Footer = () => {
    const sectionStyle = {
        padding: '40px 20px',
        backgroundColor: '#b0dedf',
        color: '#333',
        borderTopLeftRadius: '40px',
        borderTopRightRadius: '40px',
        fontFamily: 'sans-serif',
        position: 'relative',
        width: '1400px', // fixed width for non-responsiveness
        // margin: '0 auto',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '25% 25% 25% 25%',
        gap: '30px',
        borderBottom: '1px solid #888',
        paddingBottom: '30px'
    };

    const headingStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '15px'
    };

    const listStyle = {
        listStyle: 'none',
        padding: 0,
        margin: 0
    };

    const listItemStyle = {
        marginBottom: '8px'
    };

    const bottomRowStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '30px',
        fontSize: '14px'
    };

    const contactRowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '10px',
        flexWrap: 'nowrap',
        gap: '20px'
    };

    const contactItemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        whiteSpace: 'nowrap'
    };

    return (
        <footer style={sectionStyle}>
            <img
                src={rectImg}
                alt="no"
                style={{
                    display: 'flex',
                    position: 'absolute',
                    left: '-2px',
                    zIndex: '-1',
                    top: '-25px',
                    scale: '1',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            />

            <div style={gridStyle}>
                <div>
                    <h3 style={headingStyle}>Top Partners</h3>
                    <ul style={listStyle}>
                        {['Amazon', 'Arata', 'Beyoung', 'Myntra', 'Flipkart', 'Nike'].map((partner) => (
                            <li key={partner} style={listItemStyle}>{partner}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 style={headingStyle}>Trending Offers</h3>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>Amazon $5 Cashback</li>
                        <li style={listItemStyle}>Arata $3 Cashback</li>
                        <li style={listItemStyle}>Beyoung $0.9 Cashback</li>
                        <li style={listItemStyle}>Refer & Earn</li>
                        <li style={listItemStyle}>Blog</li>
                    </ul>
                </div>

                <div>
                    <h3 style={headingStyle}>Support</h3>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>Help</li>
                        <li style={listItemStyle}>FAQ</li>
                        <li style={listItemStyle}>Tracking</li>
                        <li style={listItemStyle}>Follow Community</li>
                    </ul>
                </div>

                <div>
                    <h3 style={headingStyle}>About</h3>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>About Us</li>
                        <li style={listItemStyle}>Contact Us</li>
                        <li style={listItemStyle}>Features</li>
                        <li style={listItemStyle}>Privacy & Policy</li>
                        <li style={listItemStyle}>Terms & Conditions</li>
                    </ul>
                </div>
            </div>

            <div style={bottomRowStyle}>
                <div style={contactRowStyle}>
                    <div style={contactItemStyle}>
                        <strong>Business Enquiries:</strong>
                        <span>📧 <a href="mailto:sales@socioglamm.com">sales@socioglamm.com</a></span>
                        <span>📞 +62 - 87787406282</span>
                    </div>

                    <div style={contactItemStyle}>
                        <strong>Complaints:</strong>
                        <span>📧 <a href="mailto:info@socioglamm.com">info@socioglamm.com</a></span>
                        <span>📞 +62 - 87787406282</span>
                    </div>
                </div>

                <p style={{ marginTop: '20px', textAlign: 'center' }}>
                    Copyright © PT.OMNI VIBE INDONESIA | Designed & Developed By Omnivibedigital Private Limited
                </p>
            </div>
        </footer>
    );
};

export default Footer;
