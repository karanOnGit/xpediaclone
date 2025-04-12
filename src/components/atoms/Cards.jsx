import React from 'react';
import { FaThumbsUp, FaComment, FaRetweet, FaShare } from 'react-icons/fa';
import shareimg from '../../assets/share.png';
import repostImg from '../../assets/repost.png';
import commentImg from '../../assets/comment.png';
import likeImg from '../../assets/like.png';

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
                    width: '659px',
                    height: '600px',
                    // width: '90%',
                    // border: '1px solid #ddd',
                    // boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    border: 'none',
                    borderRadius: '12px',
                    overflow: 'hidden',
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
                            backgroundColor: '#24803F',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '10px',
                            width: '94px',
                            height: '27px',
                            cursor: 'pointer'
                        }}>Follow</button>
                    </div>
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '24px',
                        // padding: '16px 24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        margin: '30px 50px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img src="https://s3-alpha-sig.figma.com/img/fd52/3638/9a8d9bfd1adc6c08cd35846ba602ad5d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WTF4mTySYn5bfCSQ1PqO93zm4cKYs~cZUSn6JkVvk5APW2ZYWGLHXp3oWjdluw~zXTVAPDNgFdEsaknk6VNR5vJK22FY2XyOEwGRv7nnLhzbGU6BZm6UOK5yyYpPA2~OEiXIavNYPFSKZhSLotbbQxs3K6L-DewDHk54pT7wBcSYdQzOoZTzW136diXOOVgHm2ia1P8HT6TohMv8a9U9LOWietNIm9K3cNRaUZXJ8MNpF85UrWWWQHZALyaL1phSMA8FocDDIaMKu5Sjulm5kRib0QpM84zdIPMetCbGAZlGoFuun837AYpLKEDKH-bCXgEQoHmWvtd-OUDubf8QSg__" alt="Profile" style={{
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
                            backgroundColor: '#24803F',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '10px',
                            // padding: '6px 18px',
                            width: '94px',
                            height: '27px',
                            cursor: 'pointer',
                        }}>Follow</button>
                    </div>
                    <a href={post} target='_blank'>
                        <img
                            src={post}
                            alt={`Post ${index + 1}`}
                            style={{ width: '588.78px', height: '322px', margin: '0 auto', display: 'block', borderRadius: '18px' }}
                        />
                    </a>
                    <svg width="517" height="1" viewBox="0 0 517 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.252655" y1="0.5" x2="516.82" y2="0.5" stroke="black" stroke-opacity="0.1" />
                    </svg>

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
                            <img src={likeImg} alt="nf" />

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <img src={commentImg} alt="nf" />

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <img src={repostImg} alt="nf" />

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <img src={shareimg} alt="nf" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};