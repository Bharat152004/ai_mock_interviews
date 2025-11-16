"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        await fetch("/api/auth/signout", { method: "POST" });
        // Clear all cookies on client side
        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(
              /=.*/,
              "=;expires=" + new Date().toUTCString() + ";path=/"
            );
        });
        router.push("/");
        router.refresh();
      } catch (error) {
        console.error("Sign out error:", error);
        router.push("/");
      }
    };

    handleSignOut();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl mb-4">Signing out...</h2>
        <div className="animate-spin h-8 w-8 border-4 border-primary-100 border-t-transparent rounded-full mx-auto"></div>
      </div>
    </div>
  );
}
