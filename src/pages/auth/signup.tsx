import Link from "next/link";
import styles from "@/styles/auth.module.css";

function Signup() {
    return (
        <div>
            <p>sign up</p>
            <div className={styles.inputGroup}>
                <label>
                    email
                    <input type="text"></input>
                </label>
            </div>
            <div className={styles.inputGroup}>
                <label>
                    monkeytype username
                    <input type="text"></input>
                </label>
            </div>
            <div className={styles.inputGroup}>
                <label>
                    password
                    <input type="password"></input>
                </label>
            </div>
            <Link href="/auth/login">login instead</Link>
        </div>
    );
}

export default Signup;
