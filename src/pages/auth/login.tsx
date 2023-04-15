import Link from "next/link";
import styles from "@/styles/auth.module.css";

function Login() {
    return (
        <div>
            <p>login</p>
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
            <Link href="/auth/signup">sign up instead</Link>
        </div>
    );
}

export default Login;
