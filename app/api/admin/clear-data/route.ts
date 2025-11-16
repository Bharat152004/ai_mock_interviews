import { db } from "@/firebase/admin";

export async function POST(request: Request) {
  try {
    const { secret } = await request.json();

    // Security check - only allow in development
    if (
      process.env.NODE_ENV !== "development" ||
      secret !== "clear-all-data-123"
    ) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Delete all interviews
    const interviewsSnapshot = await db.collection("interviews").get();
    const interviewsBatch = db.batch();
    interviewsSnapshot.docs.forEach((doc) => {
      interviewsBatch.delete(doc.ref);
    });
    await interviewsBatch.commit();

    // Delete all feedback
    const feedbackSnapshot = await db.collection("feedback").get();
    const feedbackBatch = db.batch();
    feedbackSnapshot.docs.forEach((doc) => {
      feedbackBatch.delete(doc.ref);
    });
    await feedbackBatch.commit();

    return Response.json({
      success: true,
      message: "All data cleared successfully",
      deleted: {
        interviews: interviewsSnapshot.size,
        feedback: feedbackSnapshot.size,
      },
    });
  } catch (error) {
    console.error("Error clearing data:", error);
    return Response.json({ error: "Failed to clear data" }, { status: 500 });
  }
}
