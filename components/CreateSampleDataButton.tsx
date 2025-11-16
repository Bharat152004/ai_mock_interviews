"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function CreateSampleDataButton({
  userId,
}: {
  userId?: string;
}) {
  const [loading, setLoading] = useState(false);

  const handleCreateSampleData = async () => {
    if (!userId) {
      toast.error("User ID not found. Please sign in.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/admin/create-sample-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, secret: "create-sample-data-123" }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Sample interviews created! Refreshing page...");
        setTimeout(() => window.location.reload(), 1500);
      } else {
        toast.error(data.error || "Failed to create sample data");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create sample data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCreateSampleData}
      disabled={loading}
      className="btn-secondary"
    >
      {loading ? "Creating..." : "🎯 Create Sample Interviews"}
    </Button>
  );
}
