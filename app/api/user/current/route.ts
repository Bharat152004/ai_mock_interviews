import { getCurrentUser } from "@/lib/actions/auth.action";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return Response.json({ error: "Not authenticated" }, { status: 401 });
    }

    return Response.json({
      userId: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("Error getting current user:", error);
    return Response.json({ error: "Failed to get user" }, { status: 500 });
  }
}
