import Link from "next/link";
import styles from "@/styles/header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div style={{display: "flexbox", flexDirection: "row", width: "100%"}}>
                <div className={styles.headerContainer} style={{textAlign: "left"}}>
                    {/* logo and title */}
                    <Link href="https://monkeytype.com" className={styles.headerLinks}>go to monkeytype!</Link>
                </div>
                <div className={styles.headerContainer} style={{textAlign: "right"}}>
                    <Link href="/" className={styles.headerLinks}>friends</Link>
                    <Link href="/leaderboard" className={styles.headerLinks}>leaderboard</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
