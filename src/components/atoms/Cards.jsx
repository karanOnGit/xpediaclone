import React from 'react';
import { FaThumbsUp, FaComment, FaRetweet, FaShare } from 'react-icons/fa';

export const Card = ({ posts }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
            alignItems: 'center',
            margin: '155px 0',
            padding: '10px 13px',
            backgroundColor: '#f5f5f5',
            borderRadius: '24px',
        }}>
            {posts.map((post, index) => (
                <div key={index} style={{
                    // width: '90%',
                    maxWidth: '600px',
                    // border: '1px solid #ddd',
                    border: 'none',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff'
                }}>
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '24px',
                        padding: '16px 24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <div style={{ fontWeight: '600', textAlign: 'left' }}>Mobile/Socioglamm</div>
                            {/* <div style={{ fontSize: '12px', color: '#888' }}>(723K Followers)</div> */}
                            <div style={{ fontSize: '12px', marginTop: '4px' }}>Connect With Style Enthusiasts</div>
                        </div>
                        <button style={{
                            backgroundColor: '#2E8B57',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '6px 18px',
                            cursor: 'pointer'
                        }}>Follow</button>
                    </div>
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '24px',
                        padding: '16px 24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                            }} />
                            <div>
                                <div style={{ fontWeight: '600' }}>Rupesh/Fashion/Socioglamm</div>
                                <div style={{ fontSize: '12px', color: '#888', textAlign: 'left' }}>310K Followers</div>
                                <div style={{ fontSize: '12px', textAlign: 'left' }}>Connect With Style Enthusiasts</div>
                            </div>
                        </div>
                        <button style={{
                            backgroundColor: '#2E8B57',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '6px 18px',
                            cursor: 'pointer'
                        }}>Follow</button>
                    </div>
                    <img
                        src={post}
                        alt={`Post ${index + 1}`}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '24px',
                        padding: '12px 24px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        fontSize: '14px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <FaThumbsUp /> Like
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <FaComment /> Comment
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <FaRetweet /> Repost
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <FaShare /> Share
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};