export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      role="status"
      aria-label="Loading page content"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
