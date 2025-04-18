import { createClient } from "@/lib/supabase/server";
import { SignInForm } from "@/components/auth/sign-in-form";
import { SignUpForm } from "@/components/auth/sign-up-form";
import { SignOutButton } from "@/components/auth/sign-out-button";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to TastyShare
      </h1>

      {session ? (
        <div className="text-center">
          <p className="mb-4">Welcome, {session.user.email}</p>
          <SignOutButton />
        </div>
      ) : (
        <div className="max-w-md mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
            <SignInForm />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <SignUpForm />
          </div>
        </div>
      )}
    </div>
  );
}
