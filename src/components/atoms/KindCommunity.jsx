import React, { useState } from 'react';

const KindCommunity = ({ onSubmit, onBack }) => {
    const [selectedType, setSelectedType] = useState('public');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const styles = {
        container: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        },
        heading: {
            fontSize: '24px',
            marginBottom: '16px'
        },
        description: {
            color: '#666',
            marginBottom: '24px',
            lineHeight: '1.5'
        },
        optionsContainer: {
            marginBottom: '24px'
        },
        option: {
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s'
        },
        optionHover: {
            borderColor: '#999'
        },
        optionSelected: {
            borderColor: '#0079d3',
            backgroundColor: '#f0f7fd'
        },
        optionContent: {
            marginLeft: '8px'
        },
        optionTitle: {
            fontWeight: 'bold',
            fontSize: '18px',
            marginBottom: '8px',
            display: 'block'
        },
        optionDescription: {
            color: '#666',
            margin: '0',
            lineHeight: '1.5'
        },
        termsNotice: {
            color: '#666',
            marginBottom: '24px',
            lineHeight: '1.5'
        },
        actionsContainer: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        button: {
            padding: '10px 20px',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer'
        },
        backButton: {
            backgroundColor: 'transparent',
            border: '1px solid #ddd',
            color: '#0079d3'
        },
        backButtonHover: {
            backgroundColor: '#f5f5f5'
        },
        submitButton: {
            backgroundColor: '#0079d3',
            color: 'white',
            border: 'none'
        },
        submitButtonHover: {
            backgroundColor: '#0069c0'
        },
        submitButtonDisabled: {
            backgroundColor: '#cccccc',
            cursor: 'not-allowed'
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        onSubmit(selectedType);
    };

    const communityTypes = [
        {
            id: 'public',
            title: 'Public',
            description: 'This community is open to everyone for viewing, posting, and commenting.'
        },
        {
            id: 'restricted',
            title: 'Restricted',
            description: 'Anyone can view this community, but only approved users can post and comment.'
        },
        {
            id: 'private',
            title: 'Private',
            description: 'Only approved users can view and contribute'
        },
        {
            id: 'mature',
            title: 'Mature (18+)',
            description: 'Users must be over 18 to view and contribute'
        }
    ];

    const getOptionStyle = (typeId) => {
        const baseStyle = { ...styles.option };
        if (selectedType === typeId) {
            return { ...baseStyle, ...styles.optionSelected };
        }
        return baseStyle;
    };

    const getButtonStyle = (type) => {
        const baseStyle = { ...styles.button };
        if (type === 'back') {
            return { ...baseStyle, ...styles.backButton };
        } else {
            if (isSubmitting) {
                return { ...baseStyle, ...styles.submitButton, ...styles.submitButtonDisabled };
            }
            return { ...baseStyle, ...styles.submitButton };
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>What kind of community is this?</h1>
            <p style={styles.description}>
                Control who can view and participate in your community. Only public communities appear in search results.
                Note: Once selected, changing your community type requires a request.
            </p>

            <form onSubmit={handleSubmit}>
                <div style={styles.optionsContainer}>
                    {communityTypes.map((type) => (
                        <div
                            key={type.id}
                            style={getOptionStyle(type.id)}
                            onClick={() => setSelectedType(type.id)}
                        >
                            <input
                                type="radio"
                                id={type.id}
                                name="communityType"
                                value={type.id}
                                checked={selectedType === type.id}
                                onChange={() => { }}
                                style={{ display: 'none' }}
                            />
                            <div style={styles.optionContent}>
                                <label htmlFor={type.id} style={styles.optionTitle}>{type.title}</label>
                                <p style={styles.optionDescription}>{type.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p style={styles.termsNotice}>
                    By continuing, you agree to our <strong>Mod Code of Conduct</strong> and acknowledge that you understand the <strong>Socioglamm Rules.</strong>
                </p>

                <div style={styles.actionsContainer}>
                    <button
                        type="button"
                        style={getButtonStyle('back')}
                        onClick={onBack}
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        style={getButtonStyle('submit')}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Creating...' : 'Create Community'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default KindCommunity;