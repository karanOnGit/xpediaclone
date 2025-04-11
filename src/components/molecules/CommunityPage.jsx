import React from 'react'
import styles from './CommunityPage.module.css';
import { CompReel } from '../atoms/CompReel';

const CommunityPage = () => {
    return (
        <div
            className={styles.container}
        >
            <CompReel />
        </div>
    )
}

export default CommunityPage