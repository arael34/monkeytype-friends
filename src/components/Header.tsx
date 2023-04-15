import Link from "next/link";
import styles from "@/styles/header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div style={{textAlign: "left"}}>
                {/* logo and title */}
                <Link href="https://monkeytype.com" className={styles.headerLinks}>Go to Monkeytype!</Link>
            </div>
            <div style={{textAlign: "right"}}>
                <Link href="/" className={styles.headerLinks}>Friends</Link>
                <Link href="/leaderboard" className={styles.headerLinks}>Leaderboard</Link>
            </div>
        </header>
    );
}

export default Header;
