export enum BackendResult {
    Success,

    RemoveStranger,
    AddExistingFriend,
    AddExistingRequest,
    DatabaseError,
}

type PersonalBests = {
    _15: number,
    _30: number,
    _60: number,
    _120: number,
};

export type ProfileInfo = {
    name: string,
    completedTests: number,
    timeTyping: number,
    personalBests: PersonalBests,
};
