import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

async function RemoveFriend(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        // extract id from json body
        const { id, friendId } = JSON.parse(req.body);

        try {
            const prisma = new PrismaClient();
            // TODO
            // if user is not friends w the user,return an error and handle

            await prisma.user.update({
                where: { id: id },
                data: {
                    friends: { disconnect: { id: friendId } },
                },
            });
            res.status(200).end();
        } catch {
            res.status(500).end();
        }
        return;
    }
    res.status(405).end();
}

export default RemoveFriend;
