"use client"

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, useSession } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
    const session = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<SignedIn>
      <SignOutButton>
      <Button>Sign Out</Button>
      </SignOutButton>
</SignedIn>


<SignedOut>
  <SignInButton mode="modal">
    <Button>Sign In</Button>
  </SignInButton>
</SignedOut>
    </main>
  );
}
