import { config } from "../lib/config";

export default function Spotlight() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-transparent via-white/[0.02] to-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            Join thousands of users who are already using YourPals to improve their daily lives.
          </p>
          <a
            href={config.aiPlatformUrl}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blueA hover:bg-blueB text-white font-semibold rounded-xl transition-colors duration-300 active:scale-95 touch-manipulation"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
