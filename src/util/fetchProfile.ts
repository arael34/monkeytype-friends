import type { ProfileInfo } from "./types";
import config from "@/../.config.json";

async function fetchProfile(uid: string): Promise<ProfileInfo | null> {
    const url = `https://api.monkeytype.com/users/${uid}/profile`;
    const requestOptions = {
        method: "GET",
        Accept: "application/json",
        "Content-Type": "application/json",
        headers: {
            Authorization: `ApeKey ${config.APE_KEY}`,
        }
    }
    
    let profileData = null;

    try {
        const resp: Response = await fetch(url, requestOptions)
        const data = (await resp.json()).data;
        profileData = {
            name: data.name,
            completedTests: data.typingStats.completedTests,
            timeTyping: data.typingStats.timeTyping,
            personalBests: {
                _15: data.personalBests.time["15"][0].wpm,
                _30: data.personalBests.time["30"][0].wpm,
                _60: data.personalBests.time["60"][0].wpm,
                _120: data.personalBests.time["120"][0].wpm,
            },
        };
    } catch(error: any) {
        console.error(`Error fetching monkeytype API: ${error}`);
    }
    
    return profileData;
}

export default fetchProfile;
