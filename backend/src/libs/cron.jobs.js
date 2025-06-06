import { db } from "./db.js";

export const updateUserRanks = async () => {
  try {
    // Get all users with their problem solved count
    const usersWithSolvedCount = await db.user.findMany({
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            problemSolved: true,
          },
        },
      },
      orderBy: {
        problemSolved: {
          _count: 'desc',
        },
      },
    });

    // Update ranks based on solved problems count
    const updatePromises = usersWithSolvedCount.map((user, index) => {
      return db.user.update({
        where: { id: user.id },
        data: { rank: index + 1 },
      });
    });

    await Promise.all(updatePromises);

    console.log(`Updated ranks for ${usersWithSolvedCount.length} users`);
    return { success: true, usersUpdated: usersWithSolvedCount.length };
  } catch (error) {
    console.error("Error updating user ranks:", error);
    throw error;
  }
};