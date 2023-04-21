import { NextApiRequest, NextApiResponse } from "next";
import Link from "next/link";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "./auth/[...nextauth]";
import { getFriends } from "@/backend/read";

type Props = { friends: User[] };

export async function getServerSideProps(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const session = await getServerSession(req, res, authOptions)
    // TODO: get userId from session
    const uid = 0;
    const friends = getFriends(uid);

    return { props: { friends: friends } };
}

function Leaderboard(props: Props) {
    return (
        <div>
            <h1>leaderboard</h1>
            <span>
                <p>3: you suck</p>
                <p>1: ur mom</p>
                <p>2: lol</p>
            </span>
            { props.friends.map((user: User, index: number) => {
                return (
                    <div key={index}>
                        { /*
                        <Link key={index} href={profile}>
                            your profile
                        </Link>
                        */}
                        <p>friend number {index}</p>
                    </div>
                );
            }) }
        </div>
    );
}

export default Leaderboard;
