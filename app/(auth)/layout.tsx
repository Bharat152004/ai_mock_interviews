import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  try {
    const isUserAuthenticated = await isAuthenticated();
    if (isUserAuthenticated) redirect("/");
  } catch (error) {
    console.error("Authentication check failed in auth layout:", error);
    // Allow access to auth pages if Firebase fails
  }

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
