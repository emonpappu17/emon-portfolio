"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg space-y-8">
        <div className="space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-red-500/10 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Something went wrong
          </h1>
          <p className="text-muted-foreground">
            An unexpected error occurred. Please try again or return to the
            homepage.
          </p>
          {error.digest && (
            <p className="text-xs text-muted-foreground/60">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="px-8 py-4 rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 rounded-full font-medium border border-border hover:border-primary/50 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
