import Link from "next/link";

function Leaderboard() {
    const friends: string[] = ["noise3"];

    return (
        <div>
            <h1>Leaderboard</h1>
            <span>
                <p>3: you suck</p>
                <p>1: ur mom</p>
                <p>2: lol</p>
            </span>
            { friends.map((profile: string, index: number) => {
                return (
                    <Link key={index} href={profile}>
                        Your Profile
                    </Link>
                );
            }) }
        </div>
    );
}

export default Leaderboard;
