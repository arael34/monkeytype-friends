import { PrismaClient, User } from "@prisma/client";
import { BackendResult } from "@/util/types";

async function getFriends(id: number): Promise<[BackendResult, User[]]> {
    try {
        // get user -> friends field
        const prisma = new PrismaClient();
        const friends = await prisma.user.findUnique({
            where: { id: id },
            select: { friends: true },
        });
        if (!friends) return [BackendResult.DatabaseError, []];
        return [BackendResult.Success, friends.friends];
    } catch {
        return [BackendResult.DatabaseError, []];
    }
}

export {
    getFriends,
};
