import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const Item = ({ label }) => {
    const itemStyle = {
        borderRadius: '8px',
        padding: '8px 13px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'Montserrat',
        cursor: 'pointer',
        // backgroundColor: 'red',
        marginBottom: '8px',
    };

    return (
        <div style={itemStyle}>
            {label}
            <FaChevronRight />
        </div>
    );
};

const SectionCard = ({ items }) => {
    return (
        <div
            style={{
                width: '227px',
                borderRadius: '28px',
                padding: '32.39px 31px',
                backgroundColor: '#fff',
                fontSize: '15px'
            }}
        >
            {items.map((item, index) => (
                <Item key={index} label={item} />
            ))}
        </div>
    );
};

export const SideFragment = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                flexDirection: 'column',
            }}
        >
            <button
                style={{
                    border: 'none',
                    width: '289px',
                    height: '53px',
                    borderRadius: '18px',
                    padding: '7px 35px',
                    fontWeight: '400',
                    fontSize: '15px',
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                }}
            >
                + Create Your Community
            </button>

            <SectionCard items={[
                'Home',
                'Trending 2025',
                'Trending 2025',
                'Explore Community',
                'Explore Subcommunity',
                'All',
            ]} />

            <SectionCard items={[
                'Socioglamm Cashback',
                'Recent Visit Community',
            ]} />

            <SectionCard items={[
                'Fashion/Socioglamm',
                'Food/Socioglamm',
                'Travel/Socioglamm',
            ]} />

            <SectionCard items={[
                'Advertising',
                'Help',
                'Best of Socioglamm',
                'Socioglamm Rules',
            ]} />

            <SectionCard items={[
                'Privacy Policy',
            ]} />
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/78d6/4f42/40165c36e7c45576eff50e06695ad8e7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A14wRopHworjho6mtxobasrG1I6QYbKIiLV8~9pge0a42cocsZVz~v-cBCBepJ46Lj7br7xgu5FWykEqT1XTWqwhthV78Mx5xHN5jQg37xt9GawLVBwthIpNcwBDxdvojOuunMtVkq7juol01xjy-O~1iAal7ucztAb~65svnI4a8tdfEdPDITVhsX6PILteqb09We0xHD1WKFsSjfvNGVkgZpngk1x6sfQbeuwm70Jp7YS-iZfBhYK8hfJ2RYWOJ1JjM~Pm45v2LQlJHV3qh6ISJlN1jctadzIsEMUxS0CQNSZGGXCwspPIqG63wcL8HTtTpxE-GMLAPVTlpt5swg__" alt="notFound" />
            </div>
        </div>
    );
};
