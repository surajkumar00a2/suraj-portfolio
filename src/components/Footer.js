'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-content mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-zinc-300">SK</span>
            <span className="text-primary">.</span>
            <span className="text-zinc-600">Analytics Engineer</span>
          </div>

          <p className="text-xs text-zinc-600">
            &copy; {currentYear} Suraj Kumar
          </p>

          <a
            href="#"
            className="text-xs text-zinc-600 hover:text-primary transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
