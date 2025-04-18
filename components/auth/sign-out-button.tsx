"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export function SignOutButton() {
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <Button variant="ghost" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}
