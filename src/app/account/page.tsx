"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (status === "loading") {
    return <div className="mx-auto max-w-md px-6 py-24 text-center text-light/50">Loading…</div>;
  }

  if (session) {
    return (
      <div className="mx-auto max-w-md px-6 py-20 text-center">
        <h1 className="font-display text-5xl tracking-wide mb-2">
          Welcome back{session.user?.name ? `, ${session.user.name}` : ""}
        </h1>
        <p className="text-light/50 text-sm mb-8">{session.user?.email}</p>
        <div className="space-y-3">
          <Link
            href="/shop"
            className="block bg-accent text-dark font-semibold py-3 rounded-full hover:brightness-95 transition"
          >
            Browse Bikes
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full border border-white/10 py-3 rounded-full hover:border-accent hover:text-accent transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (mode === "signup") {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Registration failed");
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <h1 className="font-display text-5xl tracking-wide mb-2">
        {mode === "signin" ? "Sign In" : "Create Account"}
      </h1>
      <p className="text-light/50 text-sm mb-8">
        {mode === "signin"
          ? "Access your orders and rental bookings."
          : "Save your details for faster checkout next time."}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <input
            type="text"
            required
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none"
          />
        )}
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none"
        />
        <input
          type="password"
          required
          minLength={8}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none"
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent text-dark font-semibold py-3 rounded-full disabled:opacity-50 hover:brightness-95 transition"
        >
          {loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Create Account"}
        </button>
      </form>

      <p className="text-sm text-light/50 mt-6 text-center">
        {mode === "signin" ? "New to Veloxa?" : "Already have an account?"}{" "}
        <button
          onClick={() => {
            setMode(mode === "signin" ? "signup" : "signin");
            setError(null);
          }}
          className="text-accent hover:underline"
        >
          {mode === "signin" ? "Create an account" : "Sign in"}
        </button>
      </p>
    </div>
  );
}
