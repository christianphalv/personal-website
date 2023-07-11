import React from "react";
import Link from "next/link";
import styles from './page.module.css'


export default function Header() {
    return (
        <header className={styles.header}>
            <h2>Christian Halvorson</h2>
            <div className={styles.header_nav_link_set}>
                <Link className={styles.header_nav_link} href={"/"}>Home</Link>
                <Link className={styles.header_nav_link} href={"/experience"}>Experience</Link>
                <Link className={styles.header_nav_link} href={"/projects"}>Projects</Link>
            </div>
        </header>
    )
}

export function HeaderSpacer() {
    return (
        <div className={styles.header_spacer}></div>
    )
}