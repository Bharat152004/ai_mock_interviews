import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";
import SignOutButton from "@/components/SignOutButton";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image
            src="/final_logo.png"
            alt="MockWise Logo"
            width={50}
            height={50}
          />
          <h2 className="text-primary-100">MockWise</h2>
        </Link>
        <SignOutButton />
      </nav>

      {children}
    </div>
  );
};

export default Layout;
