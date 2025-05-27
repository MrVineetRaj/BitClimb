import { db } from "../libs/db.js";
import { ApiError, ApiResponse, asyncHandler } from "../libs/helpers.js";

const getAllProblemLists = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  // Validate user ID
  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  const problemLists = await db.problemList.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res
    .status(200)
    .json(
      new ApiResponse(200, problemLists, "Problem lists retrieved successfully")
    );
});

const getProblemListById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  // Validate problem list ID and user ID
  if (!id || !userId) {
    throw new ApiError(400, "Problem list ID and User ID are required");
  }

  const problemList = await db.problemList.findUnique({
    where: {
      id: id,
      userId: userId,
    },
    include: {
      problems: {
        include: {
          problem: true, // Include problem details
        },
      },
    },
  });

  if (!problemList) {
    throw new ApiError(404, "Problem list not found or you are not authorized");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, problemList, "Problem list retrieved successfully")
    );
});

const createProblemList = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;

  // Validate input
  if (!title || !userId) {
    throw new ApiError(400, "Title and User ID are required");
  }

  const newProblemList = await db.problemList.create({
    data: {
      title: title,
      description: description,
      userId: userId,
    },
  });

  res
    .status(201)
    .json(
      new ApiResponse(201, newProblemList, "Problem list created successfully")
    );
});
const updateProblemList = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const userId = req.user.id;

  // Validate input
  if (!id || !userId) {
    throw new ApiError(400, "Problem list ID and User ID are required");
  }

  // Validate required fields
  if (!title) {
    throw new ApiError(400, "Title is required");
  }

  const updatedProblemList = await db.problemList.update({
    where: {
      id: id,
      userId: userId,
    },
    data: {
      title: title,
      description: description,
    },
  });

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedProblemList,
        "Problem list updated successfully"
      )
    );
});
const deleteProblemList = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  // Validate problem list ID and user ID
  if (!id || !userId) {
    throw new ApiError(400, "Problem list ID and User ID are required");
  }

  const deletedProblemList = await db.problemList.delete({
    where: {
      id: id,
      userId: userId,
    },
  });

  if (!deletedProblemList) {
    throw new ApiError(404, "Problem list not found or you are not authorized");
  }

  res
    .status(200)
    .json(new ApiResponse(200, {}, "Problem list deleted successfully"));
});
const addProblemToList = asyncHandler(async (req, res) => {
  const { id } = req.params; // Problem list ID
  const { problemId } = req.body; // Problem ID to add
  const userId = req.user.id;

  // Validate input
  if (!id || !problemId || !userId) {
    throw new ApiError(
      400,
      "Problem list ID, Problem ID, and User ID are required"
    );
  }

  await db.problemInProblemList.create({
    data: {
      problemListId: id,
      problemId: problemId,
      userId: userId,
    },
  });
  res
    .status(201)
    .json(
      new ApiResponse(
        200,
        updatedProblemList,
        "Problem added to list successfully"
      )
    );
});
const removeProblemFromList = asyncHandler(async (req, res) => {});
export {
  getAllProblemLists,
  getProblemListById,
  createProblemList,
  updateProblemList,
  deleteProblemList,
  addProblemToList,
  removeProblemFromList,
};
