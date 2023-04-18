import { getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import fetchProfile from "@/monkeytype/fetchProfile";
import { ProfileInfo } from "@/monkeytype/profileInfo";
import authOptions from "./[...nextauth]";

export async function getServerSideProps(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const session = await getServerSession(req, res, authOptions)

    if (session) {
        const data = await fetchProfile("");
        if (data) return { props: data };
        console.error("Error! User data is null!");
        return { props: null };
    } else {
        res.writeHead(302, { Location: "/auth/login" });
        res.end();

    // `as never` prevents inference issues
    // with InferGetServerSidePropsType.
    // The props returned here don't matter because we've
    // already redirected the user.
    return { props: {} as never };
    }
}

function Profile(props: ProfileInfo) {
    return (
        <div>
            <p>this is your profile</p>
            <p>your name: { props.name }</p>
            <p>completed tests: { props.completedTests }</p>
            <p>time typing: { Math.floor(props.timeTyping) }</p>
            <br />
            <p>Personal Bests:</p>
            <p>15: { props.personalBests._15 }</p>
            <p>30: { props.personalBests._30 }</p>
            <p>60: { props.personalBests._60 }</p>
            <p>120: { props.personalBests._120 }</p>

        </div>
    );
}

export default Profile;
