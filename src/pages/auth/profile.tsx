import fetchProfile from "@/monkeytype/fetchProfile";
import { ProfileInfo } from "@/monkeytype/profileInfo";

export async function getServerSideProps() {
    // this will need to use auth
    const data = await fetchProfile("noise3");
    if (!data) return { props: null };
    return { props: data };
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
