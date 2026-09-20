import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-cloud via-sky to-abyss text-center">
      <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-white/70 mb-4">
        Altitude: unknown
      </p>
      <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl md:text-8xl font-semibold text-white">
        404
      </h1>
      <p className="mt-6 text-white/80 font-[family-name:var(--font-ibm-plex)] max-w-md">
        Looks like you free-fell past this page. It doesn&apos;t exist —
        or it&apos;s still sinking somewhere in the abyss.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-white font-medium hover:bg-signal/90 transition-colors"
      >
        Back to solid ground
      </Link>
    </main>
  );
}