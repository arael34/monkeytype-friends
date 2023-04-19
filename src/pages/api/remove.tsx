import { NextApiRequest, NextApiResponse } from "next";
import { removeFriend } from "@/backend/write";
import { BackendResult } from "@/util/types";

async function _removeFriend(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        // extract id from json body
        const { id, friendId } = JSON.parse(req.body);
        const result: BackendResult = await removeFriend(id, friendId);

        switch (result) {
            case BackendResult.Success:
                res.status(200).end();
                return;
            case BackendResult.DatabaseError:
                res.status(500).end();
                return;
            case BackendResult.RemoveStranger:
                res.status(400).end();
                return;
        }
    }
    res.status(405).end();
}

export default _removeFriend;
