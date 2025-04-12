import React from 'react'
import styles from './SidePanel.module.css'
import { SideFragment } from '../atoms/SideFragment'

export const SidePanel = () => {
    return (
        <div className={styles.containerStyle}>
            <SideFragment />
        </div>
    )
}
