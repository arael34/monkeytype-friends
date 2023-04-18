import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

async function GetFriends(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        // extract id from json body
        // could also use next-auth session?
        const { id } = JSON.parse(req.body);

        // get user -> friends field
        const prisma = new PrismaClient();
        const friends = await prisma.user.findUnique({
            where: { id: id },
            select: { friends: true },
        });

        if (friends) {
            res.status(200).json(friends.friends);
        } else {
            res.status(500);
        }
        return;
    }
    res.status(405);
}

export default GetFriends;
