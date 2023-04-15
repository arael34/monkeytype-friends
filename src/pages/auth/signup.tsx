import Link from "next/link";

function Signup() {
    return (
        <div>
            <p>sign up</p>
            <Link href="/auth/login">login instead</Link>
        </div>
    );
}

export default Signup;
