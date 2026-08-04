import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import BookModal from './components/BookModal';
import Stats from './components/Stats';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const INITIAL_BOOKS = [
  {
    id: 1,
    bookName: 'The Great Gatsby',
    bookAuthor: 'F. Scott Fitzgerald',
    bookPrice: 14.99,
    publishDate: '1925-04-10',
    genre: 'Classic',
    rating: 5,
    description: 'A masterpiece of American literature exploring wealth, love, and tragedy in the Roaring Twenties.',
    isFavorite: true
  },
  {
    id: 2,
    bookName: 'To Kill a Mockingbird',
    bookAuthor: 'Harper Lee',
    bookPrice: 16.50,
    publishDate: '1960-07-11',
    genre: 'Classic',
    rating: 5,
    description: 'A moving story of legal justice, innocence, and compassion in the American South.',
    isFavorite: false
  },
  {
    id: 3,
    bookName: '1984',
    bookAuthor: 'George Orwell',
    bookPrice: 13.99,
    publishDate: '1949-06-08',
    genre: 'Dystopian',
    rating: 5,
    description: 'A chilling dystopian novel depicting totalitarian surveillance and thought control.',
    isFavorite: true
  },
  {
    id: 4,
    bookName: 'Dune',
    bookAuthor: 'Frank Herbert',
    bookPrice: 18.99,
    publishDate: '1965-08-01',
    genre: 'Sci-Fi',
    rating: 5,
    description: 'An epic science fiction saga set on the desert planet Arrakis.',
    isFavorite: true
  },
  {
    id: 5,
    bookName: 'Pride and Prejudice',
    bookAuthor: 'Jane Austen',
    bookPrice: 11.99,
    publishDate: '1813-01-28',
    genre: 'Romance',
    rating: 4,
    description: 'A classic romantic comedy of manners following Elizabeth Bennet and Mr. Darcy.',
    isFavorite: false
  }
];

const ToastNotification = ({ toast, onClose }) => {
  const isError = toast.type === 'error';
  const isSuccess = toast.type === 'success';

  const bgStyle = isSuccess
    ? 'bg-[#CCFF00] text-black'
    : isError
    ? 'bg-[#FF4D4D] text-white'
    : 'bg-[#00E5FF] text-black';

  const Icon = isSuccess ? CheckCircle2 : isError ? AlertCircle : Info;

  return (
    <div className={`nb-card ${bgStyle} p-4 border-3 border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-3 min-w-[280px] max-w-md animate-slide-down`}>
      <Icon className="w-5 h-5 shrink-0 stroke-[2.5]" />
      <div className="flex-1 text-xs font-black uppercase tracking-wide">{toast.message}</div>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="w-6 h-6 rounded-md bg-black text-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors border border-black"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5 stroke-[3]" />
      </button>
    </div>
  );
};

const App = () => {
  const [books, setBooks] = useState(INITIAL_BOOKS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('title-asc');
  const [viewMode, setViewMode] = useState('grid');
  
  const [theme, setTheme] = useState(() => localStorage.getItem('nb_book_theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nb_book_theme', theme);
  }, [theme]);

  const handleToggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success') => {
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const handleDismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleOpenAddModal = () => {
    setEditingBook(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (book) => {
    setEditingBook(book);
    setIsModalOpen(true);
  };

  const handleSaveBook = (bookData) => {
    const targetId = bookData._id || bookData.id;
    if (editingBook) {
      setBooks((prev) =>
        prev.map((b) => ((b._id || b.id) === targetId ? { ...b, ...bookData } : b))
      );
      addToast(`Updated details for "${bookData.bookName}"`, 'success');
    } else {
      setBooks((prev) => [{ ...bookData, id: Date.now() }, ...prev]);
      addToast(`Added "${bookData.bookName}" to collection`, 'success');
    }
  };

  const handleDeleteBook = (id) => {
    const target = books.find((b) => (b._id || b.id) === id);
    if (!target) return;

    if (window.confirm(`Are you sure you want to remove "${target.bookName}"?`)) {
      setBooks((prev) => prev.filter((b) => (b._id || b.id) !== id));
      addToast(`Removed "${target.bookName}" from library`, 'info');
    }
  };

  const handleToggleFavorite = useCallback((id) => {
    const target = books.find((b) => (b._id || b.id) === id);
    if (!target) return;

    const nextState = !target.isFavorite;
    setBooks((prev) => prev.map((b) => ((b._id || b.id) === id ? { ...b, isFavorite: nextState } : b)));
    addToast(nextState ? `Marked "${target.bookName}" as favorite` : `Removed "${target.bookName}" from favorites`, 'info');
  }, [books, addToast]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedGenre('All');
    setSortBy('title-asc');
  };

  const filteredAndSortedBooks = useMemo(() => {
    let result = books;

    if (selectedGenre === 'Favorites') {
      result = result.filter((b) => b.isFavorite);
    } else if (selectedGenre !== 'All') {
      result = result.filter((b) => b.genre === selectedGenre);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (b) =>
          b.bookName?.toLowerCase().includes(q) ||
          b.bookAuthor?.toLowerCase().includes(q) ||
          b.description?.toLowerCase().includes(q)
      );
    }

    return [...result].sort((a, b) => {
      switch (sortBy) {
        case 'title-asc': return (a.bookName || '').localeCompare(b.bookName || '');
        case 'title-desc': return (b.bookName || '').localeCompare(a.bookName || '');
        case 'price-low': return Number(a.bookPrice || 0) - Number(b.bookPrice || 0);
        case 'price-high': return Number(b.bookPrice || 0) - Number(a.bookPrice || 0);
        case 'rating': return (b.rating || 0) - (a.rating || 0);
        case 'newest': return new Date(b.publishDate || 0) - new Date(a.publishDate || 0);
        case 'oldest': return new Date(a.publishDate || 0) - new Date(b.publishDate || 0);
        default: return 0;
      }
    });
  }, [books, selectedGenre, searchQuery, sortBy]);

  const totalValue = useMemo(() => {
    return books.reduce((sum, b) => sum + Number(b.bookPrice || 0), 0);
  }, [books]);

  return (
    <div className="min-h-screen pb-16 transition-colors duration-200">
      {/* Toast Container */}
      <div className="fixed top-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastNotification
              toast={toast}
              onClose={() => handleDismissToast(toast.id)}
            />
          </div>
        ))}
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        {/* Header Component */}
        <Header
          bookCount={books.length}
          totalValue={totalValue}
          onOpenAddModal={handleOpenAddModal}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />

        {/* Book List / Controls */}
        <BookList
          books={filteredAndSortedBooks}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          sortBy={sortBy}
          setSortBy={setSortBy}
          viewMode={viewMode}
          setViewMode={setViewMode}
          onEdit={handleOpenEditModal}
          onDelete={handleDeleteBook}
          onToggleFavorite={handleToggleFavorite}
          onResetFilters={handleResetFilters}
          totalBooksCount={books.length}
        />

        {/* Statistics Insights Component */}
        <Stats books={books} />

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t-3 border-black/10 text-center text-xs font-black uppercase tracking-wider">
          <p>© {new Date().getFullYear()} BOOK VAULT • MADE WITH LOVE ({theme.toUpperCase()} MODE)</p>
        </footer>
      </main>

      {/* Add / Edit Book Modal */}
      <BookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveBook}
        bookToEdit={editingBook}
      />
    </div>
  );
};

export default App;