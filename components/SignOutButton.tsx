"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/signout");
  };

  return (
    <Button
      onClick={handleSignOut}
      variant="ghost"
      className="text-white hover:text-primary-100"
    >
      Sign Out
    </Button>
  );
}
