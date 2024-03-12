"use client"
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "../../styles/navigation.module.css"

export default function Navi() {
    const path = useParams();
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/home"> { path.toString() === "/" ? "🔥" : ""} Home</Link>
                </li>
                <li>
                    <Link href="/about">{ path.toString() === "/about" ? "🔥" : ""} About</Link>
                </li>
            </ul>
        </nav>
    )
}