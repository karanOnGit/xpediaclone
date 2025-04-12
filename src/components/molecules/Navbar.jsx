import React from 'react'
import styles from './Navbar.module.css';
import { NavLeft } from '../atoms/NavLeft';
import { NavRight } from '../atoms/NavRight';

const Navbar = () => {
    return (
        <div
            className={styles.innerContainer}
        >
            <NavLeft />
            <NavRight />
        </div>
    )
}

export default Navbar