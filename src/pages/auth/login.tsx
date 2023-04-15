import Link from "next/link";

function Login() {
    return (
        <div>
            <p>login</p>
            <Link href="/auth/signup">sign up instead</Link>
        </div>
    );
}

export default Login;
