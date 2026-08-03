import React from 'react';
import { Plus, BookOpen, Library, DollarSign, Sparkles, Sun, Moon } from 'lucide-react';

const Header = ({ bookCount, totalValue, onOpenAddModal, theme, onToggleTheme }) => {
  return (
    <header className="mb-10 animate-slide-down">
      {/* Top Navbar */}
      <nav className="wise-card flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#9fe870] text-[#080c14] flex items-center justify-center font-black shadow-sm">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight">Wise Books</span>
              <span className="wise-badge wise-badge-green text-[10px] uppercase font-bold tracking-wider">
                {theme === 'dark' ? 'OBSIDIAN' : 'SAGE'}
              </span>
            </div>
            <p className="caption">Personal Book Management</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="wise-btn wise-btn-secondary wise-btn-sm font-bold flex items-center gap-2"
            title={`Switch to ${theme === 'light' ? 'Obsidian Dark' : 'Wise Sage Light'} mode`}
          >
            {theme === 'light' ? (
              <>
                <Moon className="w-4 h-4" />
                <span className="text-xs">Obsidian Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-[#ffd11a]" />
                <span className="text-xs">Wise Sage Light</span>
              </>
            )}
          </button>

          {/* Add Book CTA */}
          <button
            onClick={onOpenAddModal}
            className="wise-btn wise-btn-primary font-bold shadow-sm"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add New Book</span>
          </button>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="wise-card-sage p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9fe870]/20 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9fe870]" />
            <span>Curated Collection</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.05] mb-4">
            Your Personal Book Library & Tracker
          </h1>

          <p className="body-lg mb-6 max-w-xl">
            A clean, magazine-style space to organize, review, and track the value of your literature collection.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <div className="wise-badge wise-badge-green px-4 py-2 text-sm font-semibold">
              <Library className="w-4 h-4" />
              <span>{bookCount} {bookCount === 1 ? 'Book' : 'Books'} Total</span>
            </div>

            <div className="wise-badge wise-badge-sage px-4 py-2 text-sm font-semibold">
              <DollarSign className="w-4 h-4 text-[#2ead4b]" />
              <span>Total Value: <strong>${totalValue.toFixed(2)}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;