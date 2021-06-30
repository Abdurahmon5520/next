import React from 'react';
import Link from 'next/link'
import styles from "../styles/Navbar.module.scss"
const NavBar = () => {
    return (
        <div className={styles.navigationBar}>
            <Link href="/"><a>Logo</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
            <p className="text">loreem</p>
        </div>
    );
};

export default NavBar;