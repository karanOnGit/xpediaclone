import React, { useEffect, useState } from 'react';
import crowdImage from '../../assets/Group.png'; // adjust path if you move image

const TOPICS = [
    'Beauty & Personal Care', 'Mobile & Accessories', 'Household Appliances',
    'Apparel & Clothing', 'Food & Beverages', 'Laptop & Gadgets',
    'Toys, Hobbies & DIY', 'Groceries & Pet Supplies', 'Footwear',
    'Home, Furniture & Décor', 'Pharmacy & Health'
];

export const CommunityModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedTopics, setSelectedTopics] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => setShowModal(true), 100);
        return () => clearTimeout(timer);
    }, []);

    if (!showModal) return null;

    const toggleTopic = (topic) => {
        if (selectedTopics.includes(topic)) {
            setSelectedTopics(selectedTopics.filter(t => t !== topic));
        } else if (selectedTopics.length < 3) {
            setSelectedTopics([...selectedTopics, topic]);
        }
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button style={styles.closeBtn} onClick={() => setShowModal(false)}>×</button>

                {step === 1 ? (
                    <div style={styles.content}>
                        <div style={styles.left}>
                            <h1>Tell us about your <br /> <strong>Community</strong></h1>
                            <p style={{ color: '#777' }}>
                                A strong name and description define your community’s <br />
                                purpose and attract the right audience!
                            </p>
                            <input
                                placeholder="Add your Community Name"
                                style={styles.input}
                            />
                            <textarea
                                placeholder="Add your Description"
                                style={styles.textarea}
                            />
                            <div style={{ marginTop: 20 }}>
                                <button style={styles.cancel} onClick={() => setShowModal(false)}>Cancel</button>
                                <button style={styles.next} onClick={() => setStep(2)}>Next</button>
                            </div>
                        </div>
                        <div style={styles.right}>
                            <img src={crowdImage} alt="Crowd" style={{ maxWidth: '100%' }} />
                        </div>
                    </div>
                ) : (
                    <div style={styles.step2}>
                        <h2>Add Topics</h2>
                        <p style={{ color: '#777' }}>Add up to 3 topics to help interested Socioglamm Users find your community.</p>

                        <input placeholder="Filter Your Topics" style={styles.searchInput} />

                        <div style={styles.topicsContainer}>
                            {TOPICS.map((topic) => (
                                <button
                                    key={topic}
                                    style={{
                                        ...styles.topicBtn,
                                        backgroundColor: selectedTopics.includes(topic) ? '#0a8435' : '#fff',
                                        color: selectedTopics.includes(topic) ? '#fff' : '#000',
                                        border: selectedTopics.includes(topic) ? '1px solid #24803F' : '1px solid #ccc'
                                    }}
                                    onClick={() => toggleTopic(topic)}
                                >
                                    {topic}
                                </button>
                            ))}
                        </div>

                        <p>Topics {selectedTopics.length}/3</p>

                        <div style={{ marginTop: 20 }}>
                            <button style={styles.cancel} onClick={() => setStep(1)}>Back</button>
                            <button
                                style={{
                                    ...styles.next,
                                    backgroundColor: selectedTopics.length > 0 ? '#24803F' : '#ccc',
                                    cursor: selectedTopics.length > 0 ? 'pointer' : 'not-allowed'
                                }}
                                disabled={selectedTopics.length === 0}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
    },
    modal: {
        backgroundColor: '#fff',
        borderRadius: '14px',
        width: '70%',
        minHeight: '70%',
        padding: '20px',
        position: 'relative',
    },
    closeBtn: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        border: 'none',
        background: 'none',
        fontSize: '24px',
        cursor: 'pointer',
    },
    content: {
        display: 'flex',
        height: '100%',
    },
    left: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 20px',
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: '12px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        margin: '16px 0',
    },
    textarea: {
        padding: '12px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        minHeight: '120px',
        resize: 'none',
    },
    cancel: {
        padding: '10px 20px',
        borderRadius: '20px',
        backgroundColor: '#fff',
        border: '1px solid #000',
        marginRight: '10px',
        cursor: 'pointer',
    },
    next: {
        padding: '10px 20px',
        borderRadius: '20px',
        backgroundColor: '#24803F',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    },
    step2: {
        padding: '20px',
    },
    searchInput: {
        width: '100%',
        padding: '12px',
        fontSize: '16px',
        borderRadius: '30px',
        border: '1px solid #ccc',
        margin: '16px 0',
    },
    topicsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '16px',
    },
    topicBtn: {
        padding: '10px 16px',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '14px',
    },
};
