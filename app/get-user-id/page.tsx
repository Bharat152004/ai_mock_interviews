"use client";

import { useEffect, useState } from "react";

export default function GetUserIdPage() {
  const [userId, setUserId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch("/api/user/current");
        const data = await response.json();
        if (data.userId) {
          setUserId(data.userId);
        }
      } catch (error) {
        console.error("Error fetching user ID:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserId();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary-100 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md p-8 bg-dark-200 rounded-lg">
          <h2 className="text-2xl mb-4">Not Signed In</h2>
          <p className="mb-4">You need to be signed in to see your User ID</p>
          <a href="/sign-in" className="btn-primary px-6 py-3 rounded-lg">
            Go to Sign In
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-2xl w-full p-8 bg-dark-200 rounded-lg">
        <h1 className="text-3xl mb-6">Your User ID</h1>

        <div className="bg-dark-300 p-4 rounded-lg mb-6 break-all">
          <code className="text-primary-100 text-lg">{userId}</code>
        </div>

        <button
          onClick={copyToClipboard}
          className="btn-primary w-full py-3 rounded-lg mb-6"
        >
          {copied ? "✓ Copied!" : "Copy User ID"}
        </button>

        <div className="space-y-4">
          <h3 className="text-xl">How to use:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Copy your User ID using the button above</li>
            <li>
              Go to{" "}
              <a href="/clear-data.html" className="text-primary-100 underline">
                /clear-data.html
              </a>
            </li>
            <li>Paste your User ID in the input field</li>
            <li>Click Create Sample Interview Cards</li>
            <li>Refresh the dashboard to see the sample interviews</li>
          </ol>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <a href="/dashboard" className="text-primary-100 hover:underline">
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
