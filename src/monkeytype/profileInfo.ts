const baseUrl: string = "https://api.monkeytype.com";

type PersonalBests = {
    _15: number,
    _30: number,
    _60: number,
    _120: number,
};

type ProfileInfo = {
    name: string,
    completedTests: number,
    timeTyping: number,
    personalBests: PersonalBests,
};

export type {
    ProfileInfo
};

export {
    baseUrl
};
