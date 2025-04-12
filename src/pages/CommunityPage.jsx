import React from 'react'
import styles from './CommunityPage.module.css';
import { SidePanel } from '../components/molecules/SidePanel';
import SideRightPanel from '../components/molecules/SideRightPanel';
import MainPanel from '../components/molecules/MainPanel';

const CommunityPage = () => {
    return (
        <div
            className={styles.container}
        >
            <SidePanel />
            <MainPanel />
            <SideRightPanel />
        </div>
    )
}

export default CommunityPage