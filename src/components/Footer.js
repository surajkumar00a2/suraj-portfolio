export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
      <div className="max-w-content mx-auto px-6">
        <p className="text-[13px] text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} Suraj Kumar — Built with precision.
        </p>
      </div>
    </footer>
  );
}