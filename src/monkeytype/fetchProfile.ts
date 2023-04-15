import { baseUrl, ProfileInfo } from "./profileInfo";
import API_KEY from "@/../.config.json";

async function fetchProfile(uid: string): Promise<ProfileInfo> {
    const url = `${baseUrl}/users/${uid}/profile`;
    const requestOptions = {
        headers: {
            Authorization: `ApeKey ${API_KEY}`,
        }
    }
    
    let resp = {};

    await fetch(url, requestOptions)
        .then()
        .catch((error: Error) => {
            console.error(`Error fetching monkeytype API: ${error}`);
        });

    return resp;
}
