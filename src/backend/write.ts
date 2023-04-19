import { PrismaClient } from "@prisma/client";
import { BackendResult } from "@/util/types";

async function addFriend(
    id: number,
    friendId: number
): Promise<BackendResult> {
    try {
        const prisma = new PrismaClient();

        // TODO
        // if user already has an existing friend request out,
        // or is friends w the user, return an error and handle
        await prisma.user.update({
            where: { id: id },
            data: {
                friends: { connect: { id: friendId } },
            },
        });
    } catch {
        return BackendResult.DatabaseError;
    }
    return BackendResult.Success;
}


async function removeFriend(
    id: number,
    friendId: number
): Promise<BackendResult> {
    try {
        const prisma = new PrismaClient();

        // TODO
        // if user is not friends w the user, return an error and handle
        await prisma.user.update({
            where: { id: id },
            data: {
                friends: { disconnect: { id: friendId } },
            },
        });
    } catch {
        return BackendResult.DatabaseError;
    }
    return BackendResult.Success;
}

export {
    addFriend,
    removeFriend,
};
