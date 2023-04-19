import { NextApiRequest, NextApiResponse } from "next";
import { getFriends } from "@/backend/read";
import { BackendResult } from "@/util/types";

async function GetFriends(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        // extract id from json body
        // could also use next-auth session?
        const { id } = JSON.parse(req.body);
        const [result, friends] = await getFriends(id);

        switch (result) {
            case BackendResult.Success:
                res.status(200).json({ friends: friends});
                return;
            case BackendResult.DatabaseError:
                res.status(500).end();
                return;
        }
    }
    res.status(405).end();
}

export default GetFriends;
