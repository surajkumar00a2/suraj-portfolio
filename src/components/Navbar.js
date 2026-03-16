import { useState } from 'react';

const navItems = ['About', 'Skills', 'Projects', 'Contact'];

export default function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 bg-zinc-50/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-[17px] font-bold tracking-tight">SK<span className="text-accent">.</span></a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[13.5px] font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">{item}</a>
          ))}
          <button onClick={toggleTheme} className="px-2.5 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-500 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors" aria-label="Toggle theme">{darkMode ? '☀' : '☽'}</button>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="px-2.5 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm" aria-label="Toggle theme">{darkMode ? '☀' : '☽'}</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl" aria-label="Toggle menu">{menuOpen ? '✕' : '☰'}</button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-6 pb-4">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block py-3 text-lg font-medium border-b border-zinc-100 dark:border-zinc-800">{item}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
